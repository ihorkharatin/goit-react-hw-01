import clsx from "clsx";
import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={clsx(s.wrapper)}>
      <div className={clsx(s.topBox)}>
        <img className={clsx(s.image)} src={image} alt="User avatar" />
        <p className={clsx(s.name)}>{name}</p>
        <p className={clsx(s.textGrey)}>{tag}</p>
        <p className={clsx(s.textGrey)}>{location}</p>
      </div>

      <ul className={clsx(s.bottomBox)}>
        <li className={clsx(s.bottomBoxItem)}>
          <span className={clsx(s.bottomBoxItemTitle)}>Followers</span>
          <span className={clsx(s.bottomBoxItemValue)}>{stats.followers}</span>
        </li>
        <li className={clsx(s.bottomBoxItem)}>
          <span className={clsx(s.bottomBoxItemTitle)}>Views</span>
          <span className={clsx(s.bottomBoxItemValue)}>{stats.views}</span>
        </li>
        <li className={clsx(s.bottomBoxItem)}>
          <span className={clsx(s.bottomBoxItemTitle)}>Likes</span>
          <span className={clsx(s.bottomBoxItemValue)}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
