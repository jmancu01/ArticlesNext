import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div className={headerStyles.container}>
      <div className={headerStyles.second}>
      <h1 className={headerStyles.title}>
        <span>WebDev</span> News
      </h1>
      <p className={headerStyles.description}>
        Keep up to date with the latest web dev news
      </p>
      <button className='button'>
        Suscribite
      </button>
      </div>
     
    </div>
  )
}

export default Header
