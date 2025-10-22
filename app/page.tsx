import Hero from '@/components/Hero'
import MultiChannel from '@/components/MultiChannel'
import IntelligenceSection from '@/components/IntelligenceSection'
import ProblemSection from '@/components/ProblemSection'
import WorkflowBuilder from '@/components/WorkflowBuilder'
import CaseStudy from '@/components/CaseStudy'
import TieredCapability from '@/components/TieredCapability'
import AlwaysOn from '@/components/AlwaysOn'
import EnterpriseSafety from '@/components/EnterpriseSafety'
import Integrations from '@/components/Integrations'
import FinalCTA from '@/components/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <MultiChannel />
      <IntelligenceSection />
      <ProblemSection />
      <WorkflowBuilder />
      <CaseStudy />
      <TieredCapability />
      <AlwaysOn />
      <EnterpriseSafety />
      <Integrations />
      <FinalCTA />
    </>
  )
}

