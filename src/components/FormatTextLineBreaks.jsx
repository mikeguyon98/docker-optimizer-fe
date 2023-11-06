import React from 'react';

const FormatTextWithLineBreaks = ({ text }) => {
    const lines = text.split('\n');
    return (
      <>
        {lines.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </>
    );
  };

export default FormatTextWithLineBreaks;