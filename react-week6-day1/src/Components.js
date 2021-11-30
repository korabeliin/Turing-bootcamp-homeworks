import React, {useState, useRef, Component, createRef} from 'react';
import './App.css';



const InputFunc = () => {

  const inputFuncRef = useRef()

  const handleClick = () => {
    inputFuncRef.current.focus()
  }

  const bluring = () => {
    if (inputFuncRef.current.value === 'Hello world!')
    inputFuncRef.current.blur()
  }

  return(
    <div className="focused-input-container">
      <h2>Functional Component</h2>
      <input ref={inputFuncRef} onChange={bluring} type="text" />
      <button onClick={handleClick}>Click me!</button>
      <h2>Class Component</h2>
      <InputClass />
    </div>
  );
}

class InputClass extends Component {

  constructor(props) {
    super(props);
    this.inputClass = createRef();
  }

  render(){

    const handleClick = () => {
      this.inputClass.current.focus();
    }

    const bluring = () => {
      if(this.inputClass.current.value === 'Hello world!') {
        this.inputClass.current.blur()
      }
    }

    return (
      <>
        <input ref={this.inputClass} onChange={bluring} type="text" />
        <button onClick={handleClick}>Click me too!</button>
      </>  
    );
  }
}

const Posts = () => {
  const [height] = useState(['100px', '200px', '300px']);
  const [heightTwo] = useState(['100px', '200px', '300px']);
  const [heightThree] = useState(['100px', '200px', '300px']);
  const randIndex = Math.floor(Math.random() * height.length)
  const randIndexTwo = Math.floor(Math.random() * heightTwo.length)
  const randIndexThree = Math.floor(Math.random() * heightThree.length)
  let fontSize = '0';

  const fontSizeFunc = (h) => {
    if (h === '100px') {
      fontSize = '15px'
    } else if (h === '200px') {
      fontSize = '25px'
    } else if (h === '300px'){
      fontSize = '35px'
    } return fontSize;
  }

  return (
    <div className="posts-container">
      <h2>Posts</h2>
      <div className="first-post" style={{ height: height[randIndex] }}>
        <p style={{ fontSize: fontSizeFunc(height[randIndex])}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, dolorum!</p>
      </div>
      <div className="second-post" style={{ height: heightTwo[randIndexTwo] }}>
        <p style={{ fontSize: fontSizeFunc(heightTwo[randIndexTwo]) }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nam facilis, ipsa consequatur eligendi ratione!</p>
      </div>
      <div className="third-post" style={{ height: heightThree[randIndexThree] }}>
        <p style={{ fontSize: fontSizeFunc(heightThree[randIndexThree]) }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores aut nihil recusandae quia placeat sit ad facere delectus assumenda aliquam.</p>
      </div>
      <PostsClass />
    </div>
    
  );
}

class PostsClass extends Component {
  constructor(props){
    super(props);
    this.state = {
      height: ['100px', '200px', '300px'],
      heightTwo: ['100px', '200px', '300px'],
      heightThree: ['100px', '200px', '300px'],
    }

  }

  render(){

    const randIndex = Math.floor(Math.random() * this.state.height.length)
    const randIndexTwo = Math.floor(Math.random() * this.state.heightTwo.length)
    const randIndexThree = Math.floor(Math.random() * this.state.heightThree.length)
    let fontSize = '0';

    const fontSizeFunc = (h) => {
      if (h === '100px') {
        fontSize = '15px'
      } else if (h === '200px') {
        fontSize = '25px'
      } else if (h === '300px') {
        fontSize = '35px'
      } return fontSize;
    }
    
    return(
      <>
        <h3>Classes Posts</h3>
        <div className="fourth-post" style={{ height: this.state.height[randIndex] }}>
          <p style={{ fontSize: fontSizeFunc(this.state.height[randIndex])}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, dolorum!</p>
        </div>
        <div className="fifth-post" style={{ height: this.state.heightTwo[randIndexTwo] }}>
          <p style={{ fontSize: fontSizeFunc(this.state.heightTwo[randIndexTwo]) }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nam facilis, ipsa consequatur eligendi ratione!</p>
        </div>
        <div className="sixth-post" style={{ height: this.state.heightThree[randIndexThree] }}>
          <p style={{ fontSize: fontSizeFunc(this.state.heightThree[randIndexThree]) }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores aut nihil recusandae quia placeat sit ad facere delectus assumenda aliquam.</p>
        </div>
      </>
    );
  }
}

const ScrollBlock = () => {
  const scrollDiv = useRef();
  
  const scrollDown = () => {
    scrollDiv.current.scroll(0, scrollDiv.current.scrollHeight)
  }

  return(
    <div className='scroll-container'>
      <h2>Scroll Block</h2>
      <div ref={scrollDiv} className='text-block'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde assumenda tempore ratione eum nostrum dolor quaerat ipsa, nesciunt ullam, 
          earum excepturi recusandae ex! Ratione rerum a unde quas natus recusandae perspiciatis excepturi vero? Rem, et architecto facere libero ipsam 
          nisi distinctio debitis dolores velit earum beatae laboriosam corporis fugit magnam! Quasi aspernatur, molestias laboriosam nulla accusantium 
          suscipit, provident, dolorem consequuntur nobis accusamus ipsam? Magnam recusandae nostrum repellendus incidunt voluptatum delectus distinctio 
          vitae eveniet earum maxime error, nam cupiditate perferendis nulla veniam repellat ipsa placeat. Doloribus impedit unde, a eos eligendi praesentium 
          quia velit exercitationem fuga consectetur ab dolores fugiat nobis quos totam sint enim officia maxime alias ipsam. Tempore, fugit nobis. Sequi, harum. 
          Fugiat quo id consequatur vero cum commodi, ipsum aliquam dolores ut dolor sapiente veniam ullam ab magni nobis laborum, pariatur natus delectus 
          laboriosam quam amet labore? Excepturi sequi minima, voluptas inventore commodi beatae. Eaque perferendis sequi inventore ratione dolorem incidunt 
          dolores! Quis tempore tempora repudiandae similique maiores, optio recusandae soluta tenetur blanditiis cupiditate, in sed? Eveniet corporis praesentium 
          harum nesciunt fuga facere doloremque! Repellendus beatae placeat quibusdam similique earum esse doloremque sed assumenda iure nisi nulla exercitationem, ad 
          numquam inventore qui alias, doloribus et quis ipsum quidem? Sequi alias beatae autem eaque odio necessitatibus error iure nam reiciendis, debitis id 
          exercitationem expedita, velit laboriosam. Dolore debitis doloribus perspiciatis illum pariatur fuga ducimus alias? Quam quisquam sit perspiciatis 
          consequuntur deleniti, amet eveniet aperiam numquam quaerat. Consectetur cum nam tempore perferendis voluptatibus. Molestias, iure. Illum dolor tempora 
          commodi, sint amet assumenda, et nesciunt accusantium asperiores corrupti eum sunt iusto, ex cumque quis ut magnam voluptas sed obcaecati perferendis eaque 
          consequuntur voluptatum! Harum odio consequatur repudiandae commodi, velit, rerum impedit tempore eos eius quas magni corporis fugit laudantium? Alias 
          rerum necessitatibus voluptatem nesciunt dolore soluta quaerat laboriosam quisquam consequatur exercitationem!
        </p>
      </div>

      <button onClick={scrollDown}>Scroll Down!</button>

      <h3>Classes Scroll Block</h3>
      <ScrollBlockClass />
    </div>
  );
}


class ScrollBlockClass extends Component {
  constructor(props) {
    super(props);
    this.scrollDiv = createRef();
  }

  render() {
    const scrollDown = () => {
      this.scrollDiv.current.scroll(0, this.scrollDiv.current.scrollHeight)
    }
    return (
      <>
        <div ref={this.scrollDiv} className='text-block'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde assumenda tempore ratione eum nostrum dolor quaerat ipsa, nesciunt ullam,
            earum excepturi recusandae ex! Ratione rerum a unde quas natus recusandae perspiciatis excepturi vero? Rem, et architecto facere libero ipsam
            nisi distinctio debitis dolores velit earum beatae laboriosam corporis fugit magnam! Quasi aspernatur, molestias laboriosam nulla accusantium
            suscipit, provident, dolorem consequuntur nobis accusamus ipsam? Magnam recusandae nostrum repellendus incidunt voluptatum delectus distinctio
            vitae eveniet earum maxime error, nam cupiditate perferendis nulla veniam repellat ipsa placeat. Doloribus impedit unde, a eos eligendi praesentium
            quia velit exercitationem fuga consectetur ab dolores fugiat nobis quos totam sint enim officia maxime alias ipsam. Tempore, fugit nobis. Sequi, harum.
            Fugiat quo id consequatur vero cum commodi, ipsum aliquam dolores ut dolor sapiente veniam ullam ab magni nobis laborum, pariatur natus delectus
            laboriosam quam amet labore? Excepturi sequi minima, voluptas inventore commodi beatae. Eaque perferendis sequi inventore ratione dolorem incidunt
            dolores! Quis tempore tempora repudiandae similique maiores, optio recusandae soluta tenetur blanditiis cupiditate, in sed? Eveniet corporis praesentium
            harum nesciunt fuga facere doloremque! Repellendus beatae placeat quibusdam similique earum esse doloremque sed assumenda iure nisi nulla exercitationem, ad
            numquam inventore qui alias, doloribus et quis ipsum quidem? Sequi alias beatae autem eaque odio necessitatibus error iure nam reiciendis, debitis id
            exercitationem expedita, velit laboriosam. Dolore debitis doloribus perspiciatis illum pariatur fuga ducimus alias? Quam quisquam sit perspiciatis
            consequuntur deleniti, amet eveniet aperiam numquam quaerat. Consectetur cum nam tempore perferendis voluptatibus. Molestias, iure. Illum dolor tempora
            commodi, sint amet assumenda, et nesciunt accusantium asperiores corrupti eum sunt iusto, ex cumque quis ut magnam voluptas sed obcaecati perferendis eaque
            consequuntur voluptatum! Harum odio consequatur repudiandae commodi, velit, rerum impedit tempore eos eius quas magni corporis fugit laudantium? Alias
            rerum necessitatibus voluptatem nesciunt dolore soluta quaerat laboriosam quisquam consequatur exercitationem!
          </p>
        </div>

        <button onClick={scrollDown}>Scroll Down!</button>
      </>
    );
  }
}


export default InputFunc;
export { Posts, ScrollBlock };