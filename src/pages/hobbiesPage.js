import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from '../static/assets/images/logo.svg';
import mainStyle from '../static/assets/css/main.module.css'

import MainNavbar from "../components/mainNavbar";
import ImgDesc from "../components/imgDesc";

function HobbiesPage() {
    return (
        <main role="main" className={mainStyle.componentPrimary}>
            <MainNavbar />
            <br /><br />

            <ImgDesc
                title="Magic the Gathering"
                logo={logo}
                imgSide="right"
            >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate sed assumenda voluptatum quisquam sunt excepturi rerum dolore quae officiis, fuga error non nostrum deleniti id blanditiis ex exercitationem sequi suscipit!
                Rerum ipsam velit quos. Suscipit quas quia similique dolore voluptate nostrum facilis consectetur ex quod. Provident molestias rerum delectus ut eaque blanditiis quaerat vero. Reiciendis officiis quibusdam alias ipsa unde?
                Repudiandae, minus sapiente corporis velit omnis fugiat pariatur ipsum veniam quo est necessitatibus laborum nihil perspiciatis a ab tempore facere nam adipisci recusandae laboriosam provident. Provident doloremque nihil aliquid vitae.
                Provident, voluptas fuga consequuntur iste veniam in molestiae laborum dolorum cumque accusantium dignissimos velit hic quod beatae fugiat suscipit nam quibusdam repellat facere rem expedita ipsum eum eius est? Dolores.
            </ImgDesc>

            <ImgDesc
                title="Martial Arts"
                logo={logo}
                imgSide="left"
            >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate sed assumenda voluptatum quisquam sunt excepturi rerum dolore quae officiis, fuga error non nostrum deleniti id blanditiis ex exercitationem sequi suscipit!
                Rerum ipsam velit quos. Suscipit quas quia similique dolore voluptate nostrum facilis consectetur ex quod. Provident molestias rerum delectus ut eaque blanditiis quaerat vero. Reiciendis officiis quibusdam alias ipsa unde?
                Repudiandae, minus sapiente corporis velit omnis fugiat pariatur ipsum veniam quo est necessitatibus laborum nihil perspiciatis a ab tempore facere nam adipisci recusandae laboriosam provident. Provident doloremque nihil aliquid vitae.
                Provident, voluptas fuga consequuntur iste veniam in molestiae laborum dolorum cumque accusantium dignissimos velit hic quod beatae fugiat suscipit nam quibusdam repellat facere rem expedita ipsum eum eius est? Dolores.
            </ImgDesc>
        </main>
    );
}

export default HobbiesPage