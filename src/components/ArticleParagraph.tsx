import React from 'react';

interface NewsSource {
  name: string;
  url: string;
}

interface ArticleParagraphProps {
  data: {
    description?: string;
    date: string;
    sources?: NewsSource[];
  };
}

const ArticleParagraphWith = ({ data }: ArticleParagraphProps) => {
  const description = data.description ?? '';
  if (!description) return null;

  // Split either by actual newlines or every 3 sentences
  let paragraphs: string[] = [];
  if (description.includes('\n\n')) {
    paragraphs = description.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
  } else {
    const sentences = description.split('. ');
    for (let i = 0; i < sentences.length; i += 3) {
      const chunk = sentences.slice(i, i + 3).join('. ') + (i + 3 >= sentences.length && !sentences.slice(i, i + 3).join('. ').endsWith('.') ? '.' : '');
      paragraphs.push(chunk);
    }
  }

  const sources = data.sources && data.sources.length > 0 ? data.sources : null;

  return (
    <div
      style={{
        margin: '0 auto',
        padding: '1rem',
        maxWidth: '960px',
      }}
    >
      {paragraphs.map((text, index) => (
        <p
          key={index}
          style={{
            fontFamily: '"Times New Roman", Times, serif',
            fontSize: '21px',
            lineHeight: 1.6,
            color: '#000',
            marginBottom: '1.2rem',
          }}
        >
          {index === 0 ? (
            <>
              <span
                style={{
                  float: 'left',
                  fontSize: '56px',
                  fontWeight: 600,
                  lineHeight: 1,
                  paddingRight: '6px',
                }}
              >
                {text.charAt(0)}
              </span>
              {text.slice(1)}
            </>
          ) : (
            text
          )}
        </p>
      ))}

      {/* Sources Component - Matches User's Desired Pill Design */}
      {sources && (
        <div
          style={{
            marginTop: '28px',
            marginBottom: '16px',
            borderTop: '1px solid #eee',
            paddingTop: '20px',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '10px',
              padding: '10px 16px',
              backgroundColor: '#fafafa',
              border: '1px solid #e5e5e5',
              borderRadius: '10px',
              boxShadow: '0 1px 2px rgba(0, 0, 0, 0.03)',
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
                fontSize: '16px',
                fontWeight: 700,
                color: '#111',
                letterSpacing: '0.2px',
              }}
            >
              Sources:
            </span>

            {sources.map((src, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && (
                  <span style={{ color: '#bbb', fontSize: '14px', userSelect: 'none' }}>•</span>
                )}
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  style={{
                    fontFamily: '"Georgia", serif',
                    fontSize: '15px',
                    color: '#222',
                    textDecoration: 'underline',
                    textUnderlineOffset: '3px',
                    textDecorationColor: '#ccc',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  {src.name}
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
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleParagraphWith;