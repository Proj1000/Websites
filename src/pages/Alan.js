export default function examplePage(){
    return (
        <div className='container'>
          <title>Website</title>
          <link rel='icon' href='/favicon.ico' />
  
          <main>
            <div className='underline'>
              <h1 className='title'>Shoegaze Page</h1>
            </div>
            <img
              className='pic'
              src='data:image/jpeg;base64,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'
              alt='Shoegaze'
            />
  
            <p className='description'>
                Shoegaze is a type of indie and alternative rock distinguished by its
                ethereal combination of muffled vocals, guitar distortion and effects,
                feedback, and overwhelming volume. Originally known as shoegazing
                it is occasionally confused with "dream pop". It first appeared in 
                the late 1980s in Ireland and the UK among neo-psychedelic groups,
                who would typically stand unmoving and in a distant, 
                non-confrontational condition during live performances. The term refers 
                to the extensive use of effects pedals since musicians 
                frequently looked down at their pedals while playing live.
            </p>
  
            <a className='button' href='/'>
              <p> Back to Home Page</p>
            </a>
          </main>
  
          <style jsx>{`
            .container {
              min-height: 100vh;
              padding: 0 0.5rem;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              max-width: 60rem;
              margin: auto;
            }
  
            main {
              padding: 5rem 0;
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
  
            .title {
              margin: 0;
              line-height: 1.15;
              font-size: 4rem;
            }
  
            .underline {
              /* border-bottom: solid black; */
              margin-bottom: 1.5rem;
            }
  
            .description {
              line-height: 1.5;
              font-size: 1.5rem;
            }
  
            .pic {
              height: 450px;
              width: 450px;
            }
  
            .button {
              /* margin: .5rem; */
              flex-basis: 45%;
              padding: 0.5rem;
              text-align: left;
              color: inherit;
              text-decoration: none;
              border: 1px solid #eaeaea;
              border-radius: 10px;
              transition: color 0.15s ease, border-color 0.15s ease;
            }
  
            .button:hover,
            .button:focus,
            .button:active {
              color: #0070f3;
              border-color: #0070f3;
            }
  
            .button p {
              font-size: 1rem;
              font-weight: 600;
            }
  
            code {
              background: #fafafa;
              border-radius: 5px;
              padding: 0.75rem;
              font-size: 1.1rem;
              font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
                DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
            }
          `}</style>
  
          <style jsx global>{`
            html,
            body {
              padding: 0;
              margin: 0;
              font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
            }
  
            * {
              box-sizing: border-box;
            }
          `}</style>
        </div>
      );
    
}