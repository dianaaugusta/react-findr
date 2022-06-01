
import { Menu } from 'primereact/menu';
import '../styles/findr-menu-style.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";  

function FindrMenu() {
    const userAtivo = sessionStorage.getItem("user");

    let items = [
        {label: 'Perfil', icon: 'pi pi-fw pi-user', url: ''},
        {label: 'Conexões', icon: 'pi pi-fw pi-sitemap',  url: ''},
        {label: 'Dashboards', icon: 'pi pi-fw pi-chart-line',  url: ''},
        {label: 'Notícias', icon: 'pi pi-fw pi-globe',  url: ''},
        {label: 'Freeduca', icon: 'pi pi-fw pi-pencil',  url: ''},
        {label: 'Suporte', icon: 'pi pi-fw pi-question-circle',  url: ''}
    ]

    return (
        <>
        <div class="container-menu">
        <div class="user-return-container">
            <i class="pi pi-chevron-left icon-return"></i>
            <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg" alt="" />
           <h1>{userAtivo}</h1>
        </div>
        <Menu model={items} className="menu-findr"/>
        </div>
        
        </>
    )

}

export default FindrMenu;
