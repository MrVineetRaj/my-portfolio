import Style from './component-css/FooterDiv.module.css'

const FooterDiv = () => {
  return (
    <>
      <div className={`${Style.container}`}>
        <div className={`${Style.innerContainer}`}>
          <div className={`${Style.contactLink}`}>
            <nav>
              <li>+91 7835886624</li>
              <li>vineetraj26@gmail.com</li>
              <li><a href="#" target='_blank'>Github</a></li>
              <li><a href="#" target='_blank'>LinkedIn</a></li>
              <li> <a href="#" target='_blank'>LeetCode</a></li>
            </nav>

          </div>
          <div className={`${Style.contactForm}`}>
            <form action="">
              <legend>Contact me for any project or Internship </legend>
              <input type="email" placeholder='Email' />
              <textarea name="" id="" cols="30" rows="10" placeholder='Description'></textarea>
              <button>Send Email</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default FooterDiv;