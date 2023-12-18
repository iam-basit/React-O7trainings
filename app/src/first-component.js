function FirstComponent() {
  const styling = {
    backgroundColor: 'lightblue',
  }
  const tableStyles = {
    // borderCollapse: 'collapse',
    width: '50%',
    backgroundColor: 'lightgreen',
    position: 'absolute',
    right: '60px',
    top: '50px',
  }

  // Define cell styles
  const cellStyles = {
    height: '100px',
    border: '1px solid red',
    padding: '8px',
    textAlign: 'left',
  }

  return (
    <div style={styling}>
      <img
        src="profile-pic.jpg"
        alt="profile pic"
        width="600"
        height="500"
      ></img>
      <table style={tableStyles}>
        <tr>
          <th style={cellStyles}>Name</th>
          <th style={cellStyles}>Age</th>
          <th style={cellStyles}>Date of birth</th>
          <th style={cellStyles}>Country</th>
        </tr>
        <tr>
          <td style={cellStyles}>Basit Malik</td>
          <td style={cellStyles}>24</td>
          <td style={cellStyles}>07/05/1999</td>
          <td style={cellStyles}>Afghanistan</td>
        </tr>
      </table>
      <h1>Mr. Malik Web development journey:</h1>
      <p>
        Once upon a time in the bustling city of Kabul, there lived a young and
        ambitious soul named Basit Malik. Basit had always been fascinated by
        the enchanting world of the web, where digital landscapes unfolded with
        the stroke of a keyboard. He spent countless nights exploring the
        intricacies of websites, marveling at the seamless designs and
        interactive features. One ordinary day, as the sun dipped below the
        skyline, casting a warm glow over the city, Basit found himself standing
        at a crossroads in his life. He yearned for a new adventure, a path that
        would lead him to master the art of web development. With determination
        sparkling in his eyes, he made a bold decision: he would become a web
        developer in the next six months. Basit embarked on his journey armed
        with nothing but a laptop, a passion for learning, and an unyielding
        belief in himself. He delved into the vast universe of programming
        languages, HTML, CSS, and JavaScript becoming his trusted companions.
        The online realm became his classroom, where tutorials and coding
        challenges were his daily assignments. As the weeks passed, Basit faced
        challenges that tested his patience and resolve. There were moments when
        bugs seemed like insurmountable foes, and the complexities of coding
        threatened to overwhelm him. But Basit was not one to back down; he
        embraced each hurdle as an opportunity to grow. In his pursuit of
        knowledge, Basit discovered the supportive community of fellow
        developers, both online and offline. They became his mentors, guiding
        him through the labyrinth of algorithms and offering words of
        encouragement when self-doubt crept in. The web development journey, he
        realized, was not a solitary quest but a collaborative expedition. With
        each passing day, Basit's skills blossomed. He could see the fruits of
        his labor in the code he crafted, the responsive designs he conjured,
        and the interactive features that danced at his command. The
        once-daunting world of web development transformed into a playground
        where Basit's creativity knew no bounds. Six months later, as the city
        lights twinkled outside his window, Basit Malik stood at the summit of
        his self-made mountain. He had conquered the challenges, embraced the
        setbacks, and emerged as a web developer extraordinaire. His portfolio
        glistened with projects that showcased his journey—a testament to the
        magic that unfolds when passion meets perseverance. As he navigated
        through the digital landscape he now called home, Basit reflected on the
        transformational adventure he undertook. He had not just become a web
        developer; he had become the protagonist of his own story—a story of
        determination, growth, and the unwavering belief that with dedication,
        anyone can shape their dreams into reality. And so, Basit Malik
        continued to write his code, each line a testament to the extraordinary
        journey that led him to where he stood—a master of the web, ready to
        embark on new adventures in the ever-evolving realm of technology.
      </p>
    </div>
  )
}
export default FirstComponent
