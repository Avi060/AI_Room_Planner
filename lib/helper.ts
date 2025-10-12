export interface NavLinkProps{
    label: string;
    link: string;
    protected?: boolean;
}

export const NavRoutes: NavLinkProps[] = [
    {
        label: "Home",
        link : "/"
    },
    {
        label: "Designs",
        link : "/designs"
    },{
        label: "Dashboard",
        link: "/dashboard",
        protected: true,
    },{
        label: "Contact",
        link : "#"
    },
]