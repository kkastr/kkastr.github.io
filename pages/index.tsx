import Layout from './../components/layout'
import ProfileHeader from '../components/profile_header'
import BioSection from '../components/bio_section'
import SocialBar from '../components/social_bar'
import ProjectSection from '../components/project_section'


export default function Home() {
    return (
        <Layout>
            <ProfileHeader/>

            <SocialBar/>

            <BioSection/>

            <ProjectSection/>
        </Layout>
    )
}
