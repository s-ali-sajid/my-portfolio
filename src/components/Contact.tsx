const Contact = () => {
  return (
    <section id="contact" className="section-padding container-narrow text-center">
      <h2 className="text-sm font-mono text-muted-foreground mb-2">04.</h2>
      <h3 className="text-2xl md:text-3xl font-semibold mb-4">Get In Touch</h3>
      
      <p className="text-muted-foreground max-w-md mx-auto mb-8 leading-relaxed">
        I'm currently open to new opportunities. Whether you have a question or just 
        want to say hi, I'll try my best to get back to you!
      </p>
      
      <a
        href="mailto:alex@example.com"
        className="inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary rounded-lg font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
      >
        Say Hello
      </a>
    </section>
  );
};

export default Contact;
