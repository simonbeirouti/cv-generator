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
import { personal, projects, jobListings, educationList, links, everything } from '../../data/exp';

const styles = StyleSheet.create({
  header: {
    textAlign: 'left',
    marginBottom: 18,
    textTransform: 'uppercase',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 4,
    marginBottom: 12,
  },
  stat: {
    fontSize: 12,
    fontWeight: 'normal',
  },
  descriptionContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    textAlign: 'left',
    fontSize: 12,
    fontWeight: 'normal',
    marginTop: 12,
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4
  },
  sectionContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  project: {
    display: 'flex',
    flexDirection: 'row',
  },
  leftSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    fontSize: 12,
    fontWeight: 'normal',
    width: '40%',
    paddingRight: 16,
  },
  rightSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    fontSize: 12,
    fontWeight: 'normal',
    width: '60%',
  },
  achieved: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 6,
  },
  tools: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    marginTop: 6,
  },
  tool: {
    padding: 6,
    borderRadius: 6,
    width: 'auto',
    backgroundColor: 'white',
    color: 'black',
    border: '1px solid gray',
    fontSize: 10,
    textAlign: 'center'
  }
});

function HeaderSection({ title }: { title: string }) {
  return (
    <View style={{ display: 'flex', flexDirection: 'row', justifySelf: 'start', margin: '12 0 6 -20' }}>
      <View style={{ backgroundColor: 'green', width: 16, height: 4, marginRight: 4, marginTop: 8 }} />
      <Text style={styles.header}>{title}</Text>
    </View>
  )
}

function Introduction() {
  return (
    <View>
      <HeaderSection title={personal[0].name} />
      <View style={styles.stats}>
        <Text style={styles.stat}>{personal[0].skill}</Text>
        <Link style={[styles.stat, { color: 'black' }]} href={`mailto:${personal[0].email}`}>{personal[0].email}</Link>
        <Text style={styles.stat}>{personal[0].location}</Text>
      </View>
      <View style={styles.stats}>
        <View style={styles.descriptionContainer}>
          <View style={[styles.description, { width: '30%' }]}>
            {links.map((link, index) => (
              <Link key={index} href={link.link} style={{ color: 'black' }}>{link.name}</Link>
            ))}
          </View>
          <View style={[styles.description, { width: '70%', textAlign: 'right' }]}>
            <Text>{personal[0].goal}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

function Projects() {
  return (
    <View>
      <HeaderSection title="Projects" />
      <View style={[styles.sectionContainer, { gap: 24 }]}>
        {projects.map((project, index) => (
          <View key={index} style={styles.project}>
            <View style={styles.leftSection}>
              <Text>
                {project.goal}
              </Text>
              {project.link !== '#' ? <Link href={project.link} style={{ fontSize: 10, color: '#00000099' }}>
                {project.name}
              </Link> : <Text style={{ fontSize: 10, color: '#00000099' }}>
                {project.name}
              </Text>}
              <Text style={{ fontSize: 10, color: '#00000099' }}>
                {project.status} on {project.date}
              </Text>
            </View>
            <View style={styles.rightSection}>
              <Text>
                {project.lesson}
              </Text>
              <View style={styles.achieved}>
                {project.achieved.map((achieved, index) => (
                  <Text style={{ fontSize: 10, color: '#00000099' }} key={index}>
                    - {achieved}
                  </Text>
                ))}
              </View>
              <View style={styles.tools}>
                {project.tools.map((tool, index) => (
                  <Text style={styles.tool} key={index}>
                    {tool}
                  </Text>
                ))}
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

function JobHistory() {
  return (
    <View>
      <HeaderSection title="Work Experience" />
      <View style={styles.sectionContainer}>
        {jobListings.map((job, index) => (
          <View key={index} style={styles.project}>
            <View style={styles.leftSection}>
              <Text style={{ fontWeight: 'bold' }}>
                {job.position}
              </Text>
              <Text style={{ fontSize: 10 }}>
                {job.business}
              </Text>
              <Text style={{ fontSize: 10 }}>
                {job.dateFrom} - {job.dateTo}
              </Text>
            </View>
            <View style={styles.rightSection}>
              <Text style={{ fontSize: 10, color: '#00000099' }}>
                {job.description}
              </Text>
              <View style={styles.tools}>
                {job.skills.map((skill, index) => (
                  <Text style={styles.tool} key={index}>
                    {skill}
                  </Text>
                ))}
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

function Education() {
  return (
    <View style={{ marginTop: 24 }}>
      <HeaderSection title="Education" />
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        {educationList.map((education, index) => (
          <View key={index} style={{ width: '40%' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 12 }}>
              {education.school}
            </Text>
            <Text style={{ fontSize: 10 }}>
              {education.degree}
            </Text>
            <Text style={{ fontSize: 10 }}>
              {education.yearFrom} - {education.yearTo}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

function Skills() {
  return (
    <View style={{ marginTop: 24 }}>
      <HeaderSection title="Skills" />
      <View style={styles.tools}>
        {everything.map((x, index) => (
          <Text style={styles.tool} key={index}>
            {x}
          </Text>
        ))}
      </View>
    </View>
  );
}

export default function Home() {
  const doc = (
    <Document>
      <Page style={{ padding: 20 }}>
        <Introduction />
        <Projects />
        <JobHistory />
        <Education />
        <Skills />
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
