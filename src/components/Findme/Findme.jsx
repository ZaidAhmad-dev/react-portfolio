import banner from '../data/banner.json'
import SocialIcons from '../SocialIcons/SocialIcons'

const Findme = () => {
    return (
        <div className="social-share-inner-left">
            <span className="title">{banner.social_media_title}</span>
            <SocialIcons />
        </div>
    )
}

export default Findme