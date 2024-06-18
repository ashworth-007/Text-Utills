import React,{useState} from "react";

export default function About() {
    const[myStyle,setMyStyle] = useState ({
        color: 'black',
        backgroundColor: 'white',
       })
 
    const[btntext,setbtntext] = useState("Enable Dark Mode") 
    

    const toggleStyle = () =>{
        if(myStyle.color == 'black'){
            setMyStyle({
                color: 'white',
        backgroundColor: 'black',
        border: '1px solid white'
            })
            setbtntext("Enable Light Mode")
        }

        else{
            setMyStyle({
                color: 'black',
                backgroundColor:'white',
                
            })

            setbtntext("Enable Dark Mode")

        }
    }
    
  return (
    <>
      <div className="container" style={myStyle}>
        <h2>About Us</h2>
        <div class="accordion" id="accordionExample">
          <div class="card" style={myStyle}>
            <div class="card-header" id="headingOne">
              <h5 class="mb-0">
                <button
                  class="btn btn-link"
                  
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Collapsible Group Item #1
                </button>
              </h5>
            </div>

            <div 
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div class="card-body" style={myStyle} >
                
Text utils are a collection of tools and methods that assist in text manipulation and processing. They offer functionalities like text cleaning, tokenization, lemmatization, stemming, POS tagging, NER, sentiment analysis, text similarity comparison, and text generation. These utilities are crucial in tasks involving text analysis, NLP, data analysis, and other text-related operations, enabling efficient handling and processing of textual data for various applications.

Overall, text utils play a vital role in various domains where textual data is abundant. They provide developers and researchers with efficient and reliable means to preprocess, analyze, and manipulate text
              </div>
            </div>
          </div>
          <div class="card" style={myStyle}>
            <div class="card-header" id="headingTwo">
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Collapsible Group Item #2
                </button>
              </h5>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div class="card-body" style={myStyle}>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
          <div class="card" style={myStyle}>
            <div class="card-header" id="headingThree">
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Collapsible Group Item #3
                </button>
              </h5>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
        </div>
        <button type="button" onClick={toggleStyle} className="btn btn-primary my-3">{btntext}</button>
      </div>
    </>
  );
}
