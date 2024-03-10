import Profile from "./components/Profile";

export default function App(){
  return (
    <div className="app">
      <Profile
        avatar="src/assets/fotoperfil.jpg"
        name="Hugo Noyma"
        bio="Tropa do 244"
        phone="+55 32 988652622"
        email="hugonoymax@gmail.com"
        githubUrl="https://github.com/noymaxx"
        linkedinUrl="https://www.linkedin.com/in/hugo-noyma/"
        twitterUrl="https://twitter.com/hugo_noyma"
      />
    </div>
  );
}