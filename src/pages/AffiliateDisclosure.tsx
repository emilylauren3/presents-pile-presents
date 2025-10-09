import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AffiliateDisclosure = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <article className="py-12">
          <div className="content-container max-w-4xl">
            <header className="mb-12">
              <h1 className="display-lg mb-6">
                Affiliate Disclaimer
              </h1>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="lead mb-8">
                The Present Pile (operated by Emily Good) participates in various affiliate marketing programs. 
                This means we may get paid commissions on editorially chosen products purchased through our links to retailer sites.
              </p>

              <section className="mb-12">
                <h2 className="text-2xl font-display font-semibold mb-4">How Our Links Work:</h2>
                <p className="mb-4">
                  When you click on a link on this site that leads to a third-party retailer (such as Amazon), 
                  and you subsequently make a purchase, we may receive a commission from that retailer. This comes 
                  at absolutely no extra cost to you. These commissions are vital to helping us support The Present 
                  Pile and allow us to continue to provide free, valuable gift-buying guides and recommendations.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-display font-semibold mb-4">Amazon Disclosure:</h2>
                <p className="mb-4">
                  The Present Pile is a participant in the Amazon Services LLC Associates Program, an affiliate 
                  advertising program designed to provide a means for sites to earn advertising fees by advertising 
                  and linking to Amazon.ca and other Amazon websites.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-display font-semibold mb-4">Our Promise of Independence:</h2>
                <p className="mb-4">
                  Our participation in affiliate programs does not influence our content, recommendations, or reviews. 
                  We are committed to providing honest opinions and genuine experiences to help you make informed 
                  purchasing decisions. We only recommend products or services that we have personally used, 
                  thoroughly researched, or genuinely believe will add value to our readers.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-display font-semibold mb-4">Third-Party Responsibility:</h2>
                <p className="mb-4">
                  Please note that we are not responsible for the privacy practices or the content of third-party 
                  websites. We encourage you to review their privacy policies and terms of service.
                </p>
              </section>

              <section className="mb-12">
                <p className="mb-4">
                  By using The Present Pile, you acknowledge and agree to this disclaimer. If you have any questions, 
                  please feel free to contact us.
                </p>
              </section>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default AffiliateDisclosure;
