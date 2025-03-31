'use client';

import {
  Document,
  Page,
  PDFViewer,
  PDFDownloadLink,
  Text,
  View,
  Link,
  StyleSheet
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  header: {
    textAlign: 'left',
    marginBottom: 18,
    textTransform: 'uppercase',
  },

});

function Introduction() {
  return (
    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingBottom: 18, borderBottom: '1px solid #00000010' }}>
      <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', height: '100%', width: '40%', textAlign: 'left' }}>
        <Text style={{ fontSize: 16, textTransform: 'uppercase' }}>Simon Beirouti</Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', height: '100%', width: '60%', textAlign: 'right', fontSize: 12, color: '#00000095' }}>
        <Text>Kensington, VIC, Australia | Remote</Text>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
          <Text>+61431122902 |</Text><Link style={{ color: '#00000095' }} href="mailto:hello@simonbeirouti.com"> hello@simonbeirouti.com</Link>
        </View>
      </View>
    </View>
  );
}

function Paragraph(props: { children: React.ReactNode }) {
  return (
    <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', marginTop: 18, fontSize: 12 }}>
      {props.children}
    </View>
  );
}

function LetterHead({ date, position, company }: { date: Date, position: string, company: string }) {
  return (
    <Paragraph>
      <Text>{date.toLocaleDateString('en-AU', { month: 'long', day: 'numeric', year: 'numeric' })}</Text>
      <Text>{position}</Text>
      <Text>{company}</Text>
    </Paragraph>
  );
}

function LetterTo({ name }: { name?: string }) {
  return (
    <Text>Dear {name || 'Hiring Manager'},</Text>
  );
}

export default function Home() {
  const doc = (
    <Document>
      <Page style={{ padding: 40 }}>
        <Introduction />
        <LetterHead date={new Date()} position="Software Engineer ANZ Plus" company="ANZ Bank" />
        <Paragraph>
          <LetterTo />
          <Paragraph>
            <Text>I am writing to express my interest in the Software Engineer position at ANZ Plus. With experience in full-stack development and project management, I'm excited about the opportunity to contribute to enriching the customers of ANZ's digital banking experience.</Text>
          </Paragraph>
          <Paragraph>
            <Text>My recent work includes building and deploying cloud-based applications on GCP for Coin Fi, where I leveraged modern development frameworks and SDK integration. Working on projects like the Coin Fi Console and Tutorial has honed my ability to create optimised user experiences while maintaining robust security for financial applications. My experience with deploying highly performant sites and utilising server-first approaches aligns well with the demands of business-critical banking applications.</Text>
          </Paragraph>
          <Paragraph>
            <Text>Throughout my career at companies like Shopify and Trade View Investments, I've developed strong communication skills that allow me to effectively collaborate with diverse teams and explain complex technical concepts to various stakeholders. I've managed projects using tools like GitHub and implemented CI/CD workflows to ensure quality and efficiency. While my primary experience is with JavaScript/TypeScript ecosystems, I'm enthusiastic about expanding my expertise to include Go as a primary language.</Text>
          </Paragraph>
          <Paragraph>
            <Text>As an avid hackathon participant, I'm particularly drawn to ANZ Plus's collaborative environment and commitment to technical excellence. I look forward to the opportunity to contribute to your engineering community, participate in guilds like #ai-interest-group and #anzplus-hackathon, and help drive technological innovation in digital banking.</Text>
          </Paragraph>
        </Paragraph>
        <Paragraph>
          <Text>Best regards,</Text>
          <Text style={{ marginTop: 18 }}>Simon Beirouti</Text>
        </Paragraph>
      </Page>
    </Document>
  );

  return (
    <div>
      <PDFViewer className="w-full h-svh">{doc}</PDFViewer>
      <PDFDownloadLink document={doc}>
        <div className="flex justify-center items-center h-32">
          Download
        </div>
      </PDFDownloadLink>
    </div>
  );
}
