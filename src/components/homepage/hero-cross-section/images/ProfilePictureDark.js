//Next-Translate library import
import useTranslation from 'next-translate/useTranslation';

//Next image
import Image from 'next/image';

//Static Image Import
import profilePicDark from '../../../../../public/img-dark.jpg';

//Main Profile Picture for Dark Mode
const ProfilePictureDark = () => {
  //Giving the original next-translate function (called "t") a better name
  const { t: useNextTranslate } = useTranslation();

  return (
    <>
      <Image
        placeholder="blur"
        className="cross-section__box-img"
        alt={useNextTranslate('home:ui_profile_picture_alt')}
        title={useNextTranslate('home:ui_profile_picture_title')}
        src={profilePicDark}
        width={1176}
        height={1750}
        quality={100}
        objectFit={'cover'}
        layout="responsive"
      ></Image>
    </>
  );
};

export default ProfilePictureDark;
