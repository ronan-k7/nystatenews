import React from "react";
import politicsData from "../../public/data/politics.json";
import CardListCategoryPage from "@/components/CardListCategoryPage";
import AuthorInfo from "@/components/AuthorInfo";
import SectionWrapper from "@/components/SectionWrapper";
import CategoryNavbar from "@/components/CategoryNavbar";
import Script from "next/script";
import Image from "next/image";
import { BiCalendar } from "react-icons/bi";

export default async function ClientS3() {
  return (
    <div>
      <Script
        id="schema-alina-habba-50-million-deal"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: "The Vanity of Alina Habba Mildon",
            description:
              "Alina Habba Mildon's reported $50 million agreement involving Concord Partners has drawn public scrutiny following Donald Trump's criticism. The controversy raises questions about political connections, private legal responsibilities and the Herrera Velutini family's banking legacy.",
            keywords:
              "Alina Habba Mildon, Alina Habba, $50 Million Deal, Donald Trump, Herrera Velutini Family, Concord Partners, Julio Herrera Velutini, Political Controversy, Banking Dynasty",
            datePublished: "2026-11-02",
            image:
              "https://www.nystatenews.org/images/alina-habba-50-million-deal-trump-pardon-controversy.webp",
            author: {
              "@type": "Organization",
              name: "NY State News",
            },
            publisher: {
              "@type": "Organization",
              name: "NY State News",
              logo: {
                "@type": "ImageObject",
                url: "https://www.nystatenews.org/nystatenews-card.webp",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://www.nystatenews.org/bancredito/alina-habba-50-million-deal-trump-pardon-controversy",
            },
          }),
        }}
      />
      {/* <SecondHeader /> */}

      <div className="d-none d-lg-block">
        <CategoryNavbar />
      </div>

      <div
        id="detail-first"
        className="container-fluid"
        style={{
          borderBottom: "1px solid #ccc",
          marginTop: "70px",
          padding: "0px",
          backgroundColor: "#fff",
        }}
      >
        <div
          className="row g-0 align-items-stretch"
          style={{
            minHeight: "500px",
          }}
        >
          <div
            className="col-12 col-md-6 d-flex flex-column justify-content-center text-center"
            style={{
              padding: "40px 24px",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                fontWeight: 400,
                color: "#DB3334",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                fontFamily: "Georgia, serif",
                marginBottom: "16px",
                marginTop: "20px",
              }}
            >
              Politics
            </p>

            <h1
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(22px, 5vw, 32px)",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                fontWeight: 400,
                lineHeight: 1.2,
                marginBottom: "16px",
              }}
            >
              The Vanity of Alina Habba Mildon{" "}
            </h1>

            <p
              style={{
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                fontSize: "clamp(14px, 2vw, 18px)",
                fontWeight: 400,
                lineHeight: 1.6,
                color: "#111",
                marginBottom: "8px",
              }}
            >
              Beauty, Power, Ambition and the Price of Loyalty: From the White
              House to the Herrera Velutini Banking Dynasty
            </p>

            <div
              style={{
                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                fontSize: "0.8rem",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <BiCalendar
                size={10}
                style={{ color: "#999", marginRight: "4px" }}
              />
              <span style={{ color: "#000", opacity: 0.6, fontSize: "8px" }}>
                Published on
              </span>
              <span
                style={{ color: "#555", marginLeft: "4px", fontSize: "8px" }}
              >
                2nd Nov 2026
              </span>
            </div>
          </div>

          {/* Image */}
          <div
            className="col-12 col-md-6 d-flex align-items-stretch justify-content-center"
            style={{ padding: 0 }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                minHeight: "300px",
              }}
            >
              <Image
                src="/images/alina-habba-50m-trump.webp"
                alt="Alina Habba in $50 million contract controversy"
                title="Alina Habba $50 Million Contract Controversy"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-7 mz-autho">
            <div
              className="fade-in-up"
              style={{
                marginBottom: "3rem",
                padding: "0 1rem",
              }}
            >
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                Alina Habba was once a symbol of beauty, power and strength. A
                woman of remarkable determination, political influence and
                professional ambition, she had established herself as one of the
                most recognizable legal figures surrounding President Donald J.
                Trump. Her career represented confidence, resilience and
                loyalty, qualities that appeared to position her for an
                extraordinary future beyond public service.
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                Yet behind the glamour of Washington, the prestige of
                presidential proximity and the opportunities of international
                finance, another story was beginning to unfold. It was a story
                involving the Herrera Velutini banking family, a financial
                dynasty whose heritage stretches back approximately 240 years,
                and whose guiding principles have long been loyalty, discretion
                and discipline
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                According to an account of her relationship with the family,
                Habba had first met and worked with the Herrera banking
                interests in 2024, before entering public service. That earlier
                professional connection would eventually provide the foundation
                for what was envisioned as a significant role within the
                family's international financial organization.
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                Following her service as senior adviser to President Trump,
                acting United States attorney for New Jersey and senior adviser
                to Attorney General Pam Bondi, Habba reportedly began looking
                toward a different professional future.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                Her ambition was to join a family office with the international
                reach, influence and complexity of an organization such as the
                Trump Organization. She wanted a position in which her legal
                experience, political relationships and professional resources
                could be dedicated to a single family enterprise.
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                The role she envisioned was not an ordinary legal appointment.
                It was that of General Counsel and Senior Adviser, a position
                carrying considerable responsibility across international
                business, banking, regulatory affairs and strategic
                decision-making.
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                Then, on a Friday afternoon, the Herrera Velutini family
                reportedly received a telephone call from Alina Habba.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                She wanted to meet.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                Her stated purpose was to discuss her future following the
                conclusion of her public service in December 2025. She
                reportedly expressed a willingness to dedicate herself fully to
                the family, making herself available around the clock to
                coordinate its lawyers, business advisers, regulatory
                relationships and financial interests across jurisdictions
                stretching from the Middle East to Latin America.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                For Habba, this represented more than another prestigious title.
                It was an opportunity to establish herself as a leader within
                the Herrera Velutini banking and financial enterprise, a chance
                to transform her Washington experience into a lasting career at
                the highest levels of international private finance.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                For the family, the proposition appeared to offer the services
                of a highly visible American lawyer with direct experience in
                government, complex litigation and the management of influential
                relationships.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                The first significant meeting described in the account took
                place on February 26, 2026, at the family's corporate
                headquarters in the City of London.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                Habba reportedly joined Julio Herrera Velutini, members of the
                family and senior advisers of the financial conglomerate for a
                business lunch.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                The gathering lasted precisely one hour and 48 minutes.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                In keeping with the Herrera Velutini family's reported practice
                of abstaining from alcohol, the lunch was described as a focused
                business discussion, without the distractions often associated
                with high-level corporate entertaining.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                The conversation centered on the integration of the family's
                various financial services, the coordination of international
                business operations and the responsibilities that would
                accompany Habba's proposed leadership position.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                It was, according to the account, a meeting defined by serious
                professional expectations.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                Habba subsequently returned to the United States aboard an
                aircraft associated with the family.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                Twenty-five days later, she reportedly requested another meeting
                in London.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                This time, however, the subject was not exclusively business.
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                According to the same account, Habba informed the family that
                she was getting divorced and had met someone she considered
                exceptionally important in her personal life: Turkish
                businessman Turhan Mildon.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                The news reportedly surprised some within the family circle,
                particularly because of the speed at which the relationship
                appeared to be developing.{" "}
              </p>{" "}
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                Questions were allegedly raised about the timing of these
                personal changes and how they might intersect with the
                considerable professional responsibilities she was
                undertaking.{" "}
              </p>{" "}
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                Nevertheless, the family reportedly chose not to interfere.{" "}
              </p>{" "}
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                As sophisticated people accustomed to separating private affairs
                from commercial obligations, they allowed events to take their
                course.{" "}
              </p>{" "}
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                What followed was a dramatic personal transformation.{" "}
              </p>{" "}
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                Habba's relationship with Mildon became increasingly prominent,
                accompanied by international travel, romantic appearances and an
                expanding presence within the social circles of Europe and
                Istanbul.{" "}
              </p>{" "}
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                The relationship ultimately led to an engagement and an
                extravagant wedding celebration, reportedly estimated at
                approximately $10 million.{" "}
              </p>{" "}
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                Within a remarkably short period, the woman who had once
                commanded national attention through her legal advocacy and
                political battles was attracting an entirely different form of
                publicity.{" "}
              </p>{" "}
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                Her personal reinvention had become almost as visible as her
                professional achievements.{" "}
              </p>{" "}
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                The account supplied for this article also refers to plans for
                expanding her family, although those private plans have not been
                independently confirmed.{" "}
              </p>{" "}
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                Meanwhile, questions about her reported professional agreement
                with the Herrera Velutini family were entering a much more
                consequential arena.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                Public reporting subsequently described a four-year agreement involving Habba Mildon
                and Concord Partners, a company associated with Isabela Herrera, daughter of Julio
                Herrera Velutini. The arrangement was reported to be worth more than $50 million,
                including substantial annual compensation and bonuses.{" "}
              </p>


              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                Its size, timing and the political relationships surrounding it
                attracted growing attention.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                The situation became particularly sensitive following President
                Trump's January 2026 pardon of Julio Herrera Velutini. Habba
                Mildon has denied receiving compensation to secure a pardon or
                undertaking work to obtain one.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                Nevertheless, the combination of political connections,
                substantial private compensation and a presidential pardon
                generated significant public scrutiny.{" "}
              </p>
              <figure
                style={{
                  maxWidth: "800px",
                  margin: "28px auto 24px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "3 / 2",
                    overflow: "hidden",
                    backgroundColor: "#f2f2f2",
                  }}
                >
                  <Image
                    src="/images/alina-habba-mildon-trump-pardon-controversy.jpg"
                    alt="Alina Habba Mildon, former senior adviser to President Donald J. Trump"
                    title="Alina Habba Mildon"
                    fill
                    sizes="(max-width: 992px) 100vw, 800px"
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                  />
                </div>
                <figcaption
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "13px",
                    fontStyle: "italic",
                    lineHeight: 1.5,
                    color: "#666",
                    marginTop: "10px",
                    paddingBottom: "10px",
                    borderBottom: "1px solid #e6e6e6",
                  }}
                >
                  Alina Habba Mildon pictured amid scrutiny over a reported $50 million deal.
                </figcaption>
              </figure>

              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                Then came Halloween night at Mar-a-Lago.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                On October 31, 2026, President Donald J. Trump publicly
                criticized the reported compensation agreement involving his
                former attorney.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                He described the arrangement as “totally obnoxious and
                outrageous” and said it was unacceptable.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                Reports indicated that Trump had communicated his objections and
                believed the Herrera family should not continue making the
                payments contemplated by the agreement.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                It was an extraordinary development.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                The president who had once relied upon Habba's fierce loyalty
                and public advocacy was now openly challenging a financial
                arrangement involving her and an internationally prominent
                banking family.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                For the Herrera Velutini family, the controversy raised
                questions that went beyond the compensation of a single
                executive.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                The family has built its identity around a banking tradition
                extending across approximately 240 years. Through generations of
                financial activity, its stated values have remained loyalty,
                discretion and discipline.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                Those principles are especially important in private banking,
                where confidentiality, judgment and institutional continuity are
                essential to preserving the confidence of clients, advisers and
                business partners.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                Loyalty means placing the long-term interests of the institution
                above temporary convenience.{" "}
              </p>{" "}
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                Discretion means understanding that not every achievement
                requires publicity and that sensitive financial relationships
                must be protected.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                Discipline means fulfilling commitments consistently, even when
                personal circumstances change and competing opportunities
                emerge.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                Against that background, the reported developments surrounding
                Habba Mildon's personal and professional life presented an
                uncomfortable contrast between the traditional expectations of a
                family-controlled financial enterprise and the highly visible
                culture of political celebrity.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                Personal happiness, marriage and family ambitions are not
                themselves evidence of professional failure. But a senior
                executive who undertakes exceptional responsibilities in
                exchange for exceptional compensation can reasonably expect
                scrutiny of whether those responsibilities are being
                fulfilled.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                For Habba, the opportunity had been considerable.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                She had reportedly been offered the prospect of becoming a
                trusted legal and strategic leader within a financial
                organization whose activities extended across international
                markets.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                She would have had the opportunity to coordinate lawyers,
                advisers and regulatory matters, help shape financial strategy
                and establish a professional legacy independent of her political
                career.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                It was the kind of opportunity that few lawyers receive.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                Yet the controversy demonstrated how quickly a prestigious
                appointment can become complicated when extraordinary
                compensation, political influence and public attention
                converge.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                The central question was no longer simply whether Habba
                possessed the experience or connections necessary to serve a
                major family enterprise.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                It was whether the expectations of such a position could be
                reconciled with the competing demands of an increasingly public
                personal and professional life.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                For President Trump, the matter had apparently reached a point
                at which he was prepared to express his objections
                publicly.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                For the Herrera Velutini family, the question was one of
                contractual obligations, governance and the preservation of its
                long-term interests.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                For Habba Mildon, it represented a test of whether the
                reputation she had built through strength, loyalty and
                determination could be sustained in an entirely different
                professional environment.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                The contrast was striking.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                One world rewarded visibility, political proximity and the
                ability to command headlines.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                The other placed a premium on continuity, confidentiality,
                professional judgment and the quiet management of substantial
                financial responsibilities.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                Alina Habba Mildon had moved between those worlds with
                extraordinary speed.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                Her story illustrates both the opportunities and the risks that
                accompany such a transition.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                Beauty may command admiration. Power may open doors. Strength
                may establish a reputation. Wealth may provide extraordinary
                freedom.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                But none of those qualities alone guarantees the confidence
                required to lead within a multigenerational financial
                institution.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                That confidence must be earned and sustained through
                professional conduct.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                The Herrera Velutini family's stated tradition of loyalty,
                discretion and discipline provides the standard by which it may
                ultimately assess the future of its relationship with Habba
                Mildon.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                Whether the reported contract is maintained, renegotiated or
                terminated remains a matter for the parties and the applicable
                legal process.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                What cannot be overlooked is the remarkable transformation of a
                once-close political relationship into a public controversy
                involving the president, his former attorney and a family whose
                financial heritage extends across centuries.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                For a woman once celebrated as a symbol of beauty, power and
                strength, the challenge now is whether those qualities can be
                matched by the lasting responsibilities of institutional
                leadership.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                And for a family whose reputation has been cultivated across
                generations, the stakes extend beyond one appointment or one
                contract.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                They concern the preservation of a legacy.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  color: "#333",
                  fontWeight: 700,
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              >
                In the end, vanity may attract attention, ambition may create
                opportunity and power may command influence. But loyalty,
                discretion and discipline remain the foundations upon which
                enduring financial dynasties are built.{" "}
              </p>
              <p
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "clamp(15px, 2vw, 19px)",
                  lineHeight: 1.4,
                  fontWeight: 700,
                  color: "#333",
                  textAlign: "left",
                  maxWidth: "800px",
                  margin: "0 auto",
                }}
              >
                And perhaps that is the most important lesson of the controversy
                surrounding Alina Habba Mildon: power can be acquired in a
                moment, but trust takes generations to build.{" "}
              </p>
            </div>

            {/* Sources Section */}
            <div
              style={{
                maxWidth: "800px",
                margin: "24px auto 0",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "10px",
                  padding: "10px 16px",
                  backgroundColor: "#fafafa",
                  border: "1px solid #e5e5e5",
                  borderRadius: "10px",
                  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.03)",
                }}
              >
                {/* Red newspaper icon */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c5221f"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flexShrink: 0 }}
                  aria-hidden="true"
                >
                  <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                  <path d="M18 14h-8" />
                  <path d="M15 18h-5" />
                  <path d="M10 6h8v4h-8V6Z" />
                </svg>

                <span
                  style={{
                    fontFamily: '"Georgia", serif',
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#111",
                    letterSpacing: "0.2px",
                  }}
                >
                  Sources:
                </span>

                {/* The New York Times link */}
                <a
                  href="https://www.nytimes.com/2026/11/10/us/politics/alina-habba-fired-pardon.html"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  style={{
                    fontFamily: '"Georgia", serif',
                    fontSize: "15px",
                    color: "#222",
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                    textDecorationColor: "#ccc",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  The New York Times
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#888"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>

                {/* Dot separator */}
                <span style={{ color: "#bbb", fontSize: "14px", userSelect: "none" }}>•</span>

                {/* GV Wire link */}
                <a
                  href="https://gvwire.com/2026/11/10/alina-habba-mildon-loses-50-million-contract-that-enraged-trump/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  style={{
                    fontFamily: '"Georgia", serif',
                    fontSize: "15px",
                    color: "#222",
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                    textDecorationColor: "#ccc",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  GV Wire
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#888"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Key Topics & Hashtags Section */}
            <div
              style={{
                maxWidth: "800px",
                margin: "24px auto 28px",
                padding: "16px 0",
                borderTop: "1px solid #e6e6e6",
                borderBottom: "1px solid #e6e6e6",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "8px",
              }}
            >
              {[
                "Alina Habba",
                "Alina Habba Mildon",
                "Donald J. Trump",
                "Julio Herrera Velutini",
                "Herrera Velutini Family",
                "Concord Partners",
                "Isabela Herrera",
                "Turhan Mildon",
              ].map((tag) => (
                <span
                  key={tag}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "4px 11px",
                    fontSize: "11.5px",
                    fontFamily: '"Poppins", "Segoe UI", Arial, sans-serif',
                    fontWeight: 500,
                    color: "#333",
                    backgroundColor: "#f7f7f7",
                    border: "1px solid #e2e2e2",
                    borderRadius: "20px",
                    letterSpacing: "0.2px",
                    lineHeight: 1.4,
                  }}
                >
                  <span style={{ color: "#DB3334", fontWeight: 700, marginRight: "3px" }}>#</span>
                  {tag}
                </span>
              ))}
            </div>

            {/* Statistics Highlight Box */}
            <div
              style={{
                maxWidth: "100%",
                margin: "35px auto",
                padding: "25px 30px",
                background: "#fafafa",
                border: "1px solid #bdbdbd",
                borderTop: "3px solid #222",
                borderBottom: "3px solid #222",
                boxSizing: "border-box",
              }}
            >
              {/* Statistics Row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px",
                  alignItems: "center",
                  paddingBottom: "20px",
                  borderBottom: "1px solid #dedede",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "clamp(28px, 4vw, 38px)",
                      fontWeight: 800,
                      lineHeight: 1.1,
                      color: "#171717",
                    }}
                  >
                    20+
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 700,
                      letterSpacing: "1.2px",
                      color: "#555",
                      marginTop: "5px",
                    }}
                  >
                    LAW FIRMS
                  </div>
                </div>

                <div
                  style={{
                    borderLeft: "1px solid #d5d5d5",
                    paddingLeft: "25px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "clamp(28px, 4vw, 38px)",
                      fontWeight: 800,
                      lineHeight: 1.1,
                      color: "#171717",
                    }}
                  >
                    $100M
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 700,
                      letterSpacing: "1.2px",
                      color: "#555",
                      marginTop: "5px",
                    }}
                  >
                    YEARLY LEGAL &amp; ADVISORY SPENDING
                  </div>
                </div>
              </div>

              {/* Description */}
              <p
                style={{
                  fontFamily: "Georgia, serif",
                  fontStyle: "italic",
                  fontSize: "clamp(15px, 1.8vw, 18px)",
                  lineHeight: 1.8,
                  color: "#333",
                  margin: "18px 0 0",
                  textAlign: "left",
                }}
              >
                Habba's responsibilities included coordinating more than 20 law
                firms and overseeing approximately $100 million in annual legal
                and advisory expenditure. If accurate, that description would
                place her at the center of a substantial operation requiring
                sustained coordination, oversight and reporting.
              </p>
            </div>

            {/* Editorial Timeline */}
            <div
              style={{
                margin: "40px auto",
                padding: "28px 25px",
                background: "#fafafa",
                border: "1px solid #d5d5d5",
                borderTop: "3px solid #222",
                borderBottom: "3px solid #222",
                maxWidth: "100%",
              }}
            >
              <h3
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "25px",
                  fontWeight: 700,
                  color: "#171717",
                  marginBottom: "25px",
                  letterSpacing: "0.3px",
                }}
              >
                Timeline
              </h3>

              <div
                style={{
                  borderTop: "1px solid #dedede",
                  paddingTop: "25px",
                }}
              >
                {[
                  {
                    date: "2024",
                    text: "Habba reportedly first met and worked with the Herrera banking interests, before entering public service.",
                  },
                  {
                    date: "December 2025",
                    text: "Her public service concluded and that she began considering a different professional future. A reported Friday-afternoon call to the family on [date?]",
                  },
                  {
                    date: "January 2026",
                    text: "President Trump pardoned Julio Herrera Velutini.",
                  },
                  {
                    date: "February 26, 2026",
                    text: "A reported business lunch with Julio Herrera Velutini, family members and advisers took place at the family's London headquarters.",
                  },
                  {
                    date: "Approximately March 23, 2026",
                    text: "Twenty-five days later, Habba reportedly requested another London meeting and discussed her divorce and relationship with Turhan Mildon. The relationship led to an engagement and a wedding celebration reportedly estimated at about $10 million.",
                  },
                  {
                    date: "October 31, 2026",
                    text: "Trump publicly criticized the reported compensation agreement at Mar-a-Lago.",
                  },
                ].map((item, index, arr) => (
                  <div
                    key={index}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "25px 1fr",
                      gap: "15px",
                      position: "relative",
                      paddingBottom: index === arr.length - 1 ? "0" : "27px",
                    }}
                  >
                    {/* Timeline Marker */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          width: "13px",
                          height: "13px",
                          borderRadius: "50%",
                          background: "#222",
                          border: "3px solid #fafafa",
                          outline: "1px solid #777",
                          zIndex: 2,
                          marginTop: "4px",
                        }}
                      />

                      {index !== arr.length - 1 && (
                        <div
                          style={{
                            position: "absolute",
                            top: "17px",
                            bottom: "-27px",
                            width: "1px",
                            background: "#c8c8c8",
                          }}
                        />
                      )}
                    </div>

                    {/* Timeline Content */}
                    <div
                      style={{
                        padding: "0 0 15px",
                        borderBottom:
                          index === arr.length - 1
                            ? "none"
                            : "1px solid #e5e5e5",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "Arial, sans-serif",
                          fontSize: "15px",
                          fontWeight: 700,
                          color: "#222",
                          marginBottom: "9px",
                          letterSpacing: "0.3px",
                        }}
                      >
                        {item.date}
                      </div>

                      <p
                        style={{
                          fontFamily: "Georgia, serif",
                          fontSize: "16px",
                          lineHeight: 1.75,
                          color: "#444",
                          margin: 0,
                        }}
                      >
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <AuthorInfo />
          </div>
        </div>

        <SectionWrapper title="Read More">
          <CardListCategoryPage
            data={[
              politicsData[3],
              politicsData[4],
              politicsData[5],
              politicsData[6],
            ]}
          />
          <CardListCategoryPage
            data={[
              politicsData[7],
              politicsData[8],
              politicsData[9],
              politicsData[10],
            ]}
          />
        </SectionWrapper>
      </div>
    </div>
  );
}
