const Contact = () => {
  return (
    <section
      id="contact"
      className="section-padding container-narrow text-center"
    >
      <h2 className="text-sm font-mono text-muted-foreground mb-2">04.</h2>
      <h3 className="text-2xl md:text-3xl font-semibold mb-4">Get In Touch</h3>

      <p className="text-muted-foreground max-w-md mx-auto mb-8 leading-relaxed">
        I'm currently open to new opportunities. Whether you have a question or
        just want to say hi, I'll try my best to get back to you!
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <a
          href="mailto:ali.sajid.dev@proton.me"
          className="text-primary hover:underline underline-offset-4 font-mono"
        >
          ali.sajid.dev@proton.me
        </a>
        <span className="hidden sm:block text-muted-foreground">|</span>
        <span className="text-primary font-mono">+92 335 228 8556</span>
      </div>
    </section>
  );
};

export default Contact;
