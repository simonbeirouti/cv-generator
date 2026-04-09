'use client';

import dynamic from 'next/dynamic';
import {
  Document,
  Font,
  Link,
  Page,
  PDFDownloadLink,
  PDFViewer,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';
import {
  additionalExperience,
  education,
  experience,
  interests,
  links,
  personal,
  skillGroups,
} from '../../data/exp';

Font.registerHyphenationCallback((word) => [word]);

const styles = StyleSheet.create({
  page: {
    paddingTop: 36,
    paddingBottom: 36,
    paddingHorizontal: 40,
    fontSize: 10.5,
    fontFamily: 'Helvetica',
    color: '#111827',
    lineHeight: 1.4,
  },
  header: {
    paddingBottom: 17,
  },
  name: {
    fontSize: 23,
    fontWeight: 700,
    marginBottom: 4,
  },
  title: {
    fontSize: 12,
    color: '#374151',
    marginTop: 10,
    marginBottom: 6,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 6,
  },
  contactText: {
    fontSize: 10,
    color: '#1F2937',
  },
  linksRow: {
    flexDirection: 'column',
    gap: 6,
    marginBottom: 8,
  },
  summary: {
    fontSize: 10.5,
    color: '#374151',
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    color: '#111827',
    marginBottom: 8,
    paddingBottom: 4,
    borderBottom: '1 solid #E5E7EB',
  },
  item: {
    marginBottom: 10,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 12,
    marginBottom: 3,
  },
  itemTitleWrap: {
    flexDirection: 'column',
    flexGrow: 1,
  },
  itemTitle: {
    fontSize: 10.5,
    fontWeight: 700,
  },
  itemSubtitle: {
    fontSize: 10,
    color: '#4B5563',
  },
  itemMeta: {
    fontSize: 9.5,
    color: '#4B5563',
    textAlign: 'right',
    width: 170,
  },
  bulletList: {
    marginTop: 3,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 2,
  },
  bulletSymbol: {
    width: 10,
    fontSize: 10,
  },
  bulletText: {
    flex: 1,
    fontSize: 10,
    color: '#1F2937',
  },
  additionalExp: {
    marginBottom: 14
  },
  inlineList: {
    fontSize: 10,
    color: '#1F2937',
  },
  footerActions: {
    padding: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  downloadButton: {
    border: '1 solid #111827',
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 16,
    fontSize: 14,
    color: '#111827',
  },
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <View style={styles.bulletList}>
      {items.map((item) => (
        <View key={item} style={styles.bulletRow}>
          <Text style={styles.bulletSymbol}>•</Text>
          <Text style={styles.bulletText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

function ResumeDocument() {
  return (
    <Document author={personal.name} title={`${personal.name} Resume`}>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{personal.name}</Text>
          <Text style={styles.title}>{personal.title}</Text>
          <View style={styles.contactRow}>
            <Text style={styles.contactText}>{personal.location}</Text>
            <Text style={styles.contactText}>{personal.phone}</Text>
            <Link style={styles.contactText} href={`mailto:${personal.email}`}>
              {personal.email}
            </Link>
          </View>
          <View style={styles.linksRow}>
            {links.map((link) => (
              <Link key={link.label} style={styles.contactText} href={link.href}>
                {link.value}
              </Link>
            ))}
          </View>
          <Text style={styles.summary}>{personal.summary}</Text>
        </View>

        <Section title="Professional Experience">
          {experience.map((role) => (
            <View key={`${role.company}-${role.title}`} style={styles.item}>
              <View style={styles.itemHeader}>
                <View style={styles.itemTitleWrap}>
                  <Text style={styles.itemTitle}>
                    {role.title} | {role.company}
                  </Text>
                  <Text style={styles.itemSubtitle}>{role.location}</Text>
                </View>
                <Text style={styles.itemMeta}>{role.date}</Text>
              </View>
              <BulletList items={role.bullets} />
            </View>
          ))}
        </Section>

        <Section title="Additional Experience">
          <View style={styles.additionalExp}>
            <BulletList items={additionalExperience} />
          </View>
        </Section>

        <Section title="Education">
          {education.map((item) => (
            <View key={`${item.school}-${item.qualification}`}>
              <View style={styles.itemHeader}>
                <View style={styles.itemTitleWrap}>
                  <Text style={styles.itemTitle}>{item.school}</Text>
                  <Text style={styles.itemSubtitle}>
                    {item.qualification}
                    {item.detail ? `, ${item.detail}` : ''}
                  </Text>
                </View>
                <Text style={styles.itemMeta}>{item.date}</Text>
              </View>
            </View>
          ))}
        </Section>

        {skillGroups.map((group) => (
          <Section key={group.name} title={group.name}>
            <Text style={styles.inlineList}>{group.items.join(' • ')}</Text>
          </Section>
        ))}

        <Section title="Interests">
          <Text style={styles.inlineList}>{interests.join(' • ')}</Text>
        </Section>
      </Page>
    </Document>
  );
}

function CvPageContent() {
  const doc = <ResumeDocument />;

  return (
    <main className="min-h-screen bg-stone-100">
      <PDFViewer className="h-[calc(100vh-88px)] w-full">{doc}</PDFViewer>
      <PDFDownloadLink document={doc} fileName="simon-beirouti-resume.pdf">
        {({ loading }) => (
          <div className="flex items-center justify-center border-t border-stone-300 bg-white p-4">
            <span className="rounded-md border border-stone-900 px-4 py-2 text-sm font-medium text-stone-900">
              {loading ? 'Preparing PDF...' : 'Download Resume PDF'}
            </span>
          </div>
        )}
      </PDFDownloadLink>
    </main>
  );
}

const CvPage = dynamic(async () => CvPageContent, {
  ssr: false,
});

export default CvPage;
