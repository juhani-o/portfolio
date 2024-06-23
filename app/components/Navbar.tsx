import data from "../data/links.json";

const Navbar = () => ( 
<div className="navbar bg-base-100 shadow-md">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Juhani Ovalo</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a href={data.links.github} className="fab fa-github text-2xl text-blue-500"/></li>
      <li><a href={data.links.linkedin} className="fab fa-linkedin text-2xl text-blue-500"/></li>
      <li><a href={data.links.mastodon} className="fa-brands fa-mastodon text-2xl text-blue-500"/></li>
      <li><a href={data.links.bluesky} className="fa-brands fa-bluesky text-2xl text-blue-500"/></li>
    </ul>
  </div>
</div>
)

export default Navbar;
