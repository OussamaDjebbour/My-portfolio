import { useForm } from "react-hook-form";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { CONTACT_INFO, SOCIAL_LINKS } from "../constants";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const FORMSUBMIT_KEY = import.meta.env.VITE_FORMSUBMIT_KEY;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
    setError,
    clearErrors,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Clear any previous errors
    clearErrors();

    try {
      const formData = new FormData();
      formData.append("name", data.name.trim());
      formData.append("email", data.email.trim());
      formData.append("subject", data.subject.trim());
      formData.append("message", data.message.trim());
      formData.append(
        "_subject",
        `Portfolio Contact from ${data.name}: ${data.subject}`,
      );
      formData.append("_captcha", "false");
      formData.append("_template", "table");

      const response = await fetch(`https://formsubmit.co/${FORMSUBMIT_KEY}`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      reset();
    } catch (error) {
      console.error("Error sending message:", error);
      setError("root", {
        type: "manual",
        message:
          "Failed to send message. Please try again or contact me directly via email.",
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can bring
            your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting
                projects. Whether you have a project in mind or just want to
                chat about web development, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {CONTACT_INFO.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 border border-blue-500/20">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-400">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-gray-800">
              <h4 className="text-white font-medium mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:transform hover:scale-110`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Send Message
            </h3>

            {isSubmitSuccessful && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <p className="text-green-400 font-medium">
                  Thank you! Your message has been sent successfully. I'll get
                  back to you within 24 hours.
                </p>
              </div>
            )}

            {errors.root && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3">
                <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                <p className="text-red-400 font-medium">
                  {errors.root.message}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters",
                      },
                      validate: (value) =>
                        value.trim().length >= 2 ||
                        "Name must be at least 2 characters",
                    })}
                    className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white placeholder-gray-400 focus:ring-1 transition-colors duration-200 ${
                      errors.name
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : "border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <div className="mt-1 flex items-center gap-1 text-red-400 text-sm">
                      <AlertCircle className="h-4 w-4" />
                      {errors.name.message}
                    </div>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                      validate: (value) => {
                        const trimmed = value.trim();
                        if (trimmed.length === 0) return "Email is required";
                        return (
                          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed) ||
                          "Invalid email address"
                        );
                      },
                    })}
                    className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white placeholder-gray-400 focus:ring-1 transition-colors duration-200 ${
                      errors.email
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : "border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <div className="mt-1 flex items-center gap-1 text-red-400 text-sm">
                      <AlertCircle className="h-4 w-4" />
                      {errors.email.message}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register("subject", {
                    required: "Subject is required",
                    minLength: {
                      value: 5,
                      message: "Subject must be at least 5 characters",
                    },
                    validate: (value) =>
                      value.trim().length >= 5 ||
                      "Subject must be at least 5 characters",
                  })}
                  className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white placeholder-gray-400 focus:ring-1 transition-colors duration-200 ${
                    errors.subject
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                      : "border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                  }`}
                  placeholder="Project inquiry"
                />
                {errors.subject && (
                  <div className="mt-1 flex items-center gap-1 text-red-400 text-sm">
                    <AlertCircle className="h-4 w-4" />
                    {errors.subject.message}
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters",
                    },
                    validate: (value) =>
                      value.trim().length >= 10 ||
                      "Message must be at least 10 characters",
                  })}
                  className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white placeholder-gray-400 focus:ring-1 transition-colors duration-200 resize-none ${
                    errors.message
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                      : "border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                  }`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <div className="mt-1 flex items-center gap-1 text-red-400 text-sm">
                    <AlertCircle className="h-4 w-4" />
                    {errors.message.message}
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitSuccessful}
                className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                  isSubmitting || isSubmitSuccessful
                    ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-1"
                }`}
              >
                {isSubmitSuccessful ? (
                  <>
                    <CheckCircle className="h-4 w-4" />
                    Message Sent!
                  </>
                ) : isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
