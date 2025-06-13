import Account from './account';
import MedMenu from './MedMenu';

import './Header.scss';

export default function Header() {
  return (
    <div className="site-header">
      <div className="logo-group">
        <img src="/src/assets/images/Logo.png" alt="health care logo" />
        <span className="title">
          Health<span className="part2">care</span>
        </span>
      </div>
      <MedMenu />
      <Account />
    </div>
  );
}
