import { Page, View, Text } from "@react-pdf/renderer";
import { styles, COLORS } from "./theme";
import {
  BRAND,
  COVER,
  WELCOME,
  ROADMAP,
  PRO_TIP_LIBRARY,
  CHECKLIST,
  TOOLS,
  MAGICA_BONUS,
  NEXT_STEPS,
} from "./content";
import type { PromptLibrary } from "./content";

export function Footer() {
  return (
    <View style={styles.footer} fixed={true}>
      <Text style={styles.footerText}>{BRAND.footer}</Text>
      <Text
        style={styles.footerPage}
        render={({ pageNumber, totalPages }) => "Page " + pageNumber + " of " + totalPages}
      />
    </View>
  );
}

export function CoverPage() {
  return (
    <Page size="A4" style={styles.coverPage}>
      <View style={styles.logoBadge}>
        <Text style={styles.logoBadgeText}>T</Text>
      </View>
      <Text style={styles.brandName}>{BRAND.name}</Text>
      <Text style={styles.coverTitle}>{BRAND.productTitle}</Text>
      <Text style={styles.coverTagline}>{BRAND.tagline}</Text>
      <View style={styles.coverDivider} />
      <View>
        {COVER.features.map(function (item, index) {
          return (
            <View style={styles.coverFeatureRow} key={index}>
              <View style={styles.coverFeatureDot} />
              <Text style={styles.coverFeatureText}>{item}</Text>
            </View>
          );
        })}
      </View>
      <Text style={styles.coverFooterText}>{BRAND.footer}</Text>
    </Page>
  );
}

export function WelcomePage() {
  return (
    <Page size="A4" style={styles.page}>
      <Text style={styles.eyebrow}>GETTING STARTED</Text>
      <Text style={styles.h1}>{WELCOME.title}</Text>
      <View style={styles.divider} />
      {WELCOME.paragraphs.map(function (paragraph, index) {
        return (
          <Text style={styles.bodyText} key={index}>
            {paragraph}
          </Text>
        );
      })}
      <Footer />
    </Page>
  );
}

export function RoadmapPage() {
  return (
    <Page size="A4" style={styles.page}>
      <Text style={styles.eyebrow}>YOUR WORKFLOW</Text>
      <Text style={styles.h1}>{ROADMAP.title}</Text>
      <Text style={styles.subtitle}>{ROADMAP.subtitle}</Text>
      {ROADMAP.steps.map(function (step, index) {
        return (
          <View style={styles.stepRow} key={index}>
            <View style={styles.stepBadge}>
              <Text style={styles.stepBadgeText}>{index + 1}</Text>
            </View>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>{step.title}</Text>
              <Text style={styles.stepText}>{step.text}</Text>
            </View>
          </View>
        );
      })}
      <View style={styles.divider} />
      <Text style={styles.h2}>Success Tips</Text>
      <View style={{ marginTop: 8 }}>
        {ROADMAP.tips.map(function (tip, index) {
          return (
            <View style={styles.bulletRow} key={index}>
              <View style={styles.bulletDot} />
              <Text style={styles.bulletText}>{tip}</Text>
            </View>
          );
        })}
      </View>
      <Footer />
    </Page>
  );
}

export function LibraryPage(props: { library: PromptLibrary }) {
  const library = props.library;
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.tagPill}>
        <Text style={styles.tagPillText}>{library.tag.toUpperCase()}</Text>
      </View>
      <Text style={styles.h1}>{library.title}</Text>
      <View style={{ marginTop: 6 }}>
        {library.items.map(function (item, index) {
          return (
            <View style={styles.card} key={index}>
              <View style={styles.cardRow}>
                <View style={styles.accentBar} />
                <View style={styles.cardContent}>
                  <View style={styles.cardTitleRow}>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                    <Text style={styles.cardIndex}>{String(index + 1).padStart(2, "0")}</Text>
                  </View>
                  <Text style={styles.labelTag}>PROMPT</Text>
                  <Text style={styles.promptText}>{item.prompt}</Text>
                  <Text style={styles.labelTag}>USE WHEN</Text>
                  <Text style={styles.useWhenText}>{item.useWhen}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>
      <View style={styles.proTipBox}>
        <Text style={styles.proTipLabel}>PRO TIP</Text>
        <Text style={styles.proTipText}>{PRO_TIP_LIBRARY}</Text>
      </View>
      <Footer />
    </Page>
  );
}

export function ChecklistPage() {
  return (
    <Page size="A4" style={styles.page}>
      <Text style={styles.eyebrow}>BEFORE YOU GENERATE</Text>
      <Text style={styles.h1}>{CHECKLIST.title}</Text>
      <Text style={styles.subtitle}>{CHECKLIST.subtitle}</Text>
      {CHECKLIST.items.map(function (item, index) {
        return (
          <View style={styles.card} key={index}>
            <View style={styles.cardRow}>
              <View style={styles.accentBar} />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={[styles.useWhenText, { marginTop: 4 }]}>{item.text}</Text>
              </View>
            </View>
          </View>
        );
      })}
      <View style={styles.proTipBox}>
        <Text style={styles.proTipLabel}>PRO TIP</Text>
        <Text style={styles.proTipText}>{CHECKLIST.proTip}</Text>
      </View>
      <Footer />
    </Page>
  );
}

export function ToolsPage() {
  return (
    <Page size="A4" style={styles.page}>
      <Text style={styles.eyebrow}>RECOMMENDED AI TOOLS</Text>
      <Text style={styles.h1}>{TOOLS.title}</Text>
      {TOOLS.items.map(function (tool, index) {
        return (
          <View style={styles.toolCard} key={index}>
            <View style={styles.cardRow}>
              <View style={styles.toolBadge}>
                <Text style={styles.toolBadgeText}>{tool.name.charAt(0)}</Text>
              </View>
              <View style={styles.cardContent}>
                <Text style={styles.toolName}>{tool.name}</Text>
                <Text style={styles.toolMetaLabel}>WHAT IT DOES</Text>
                <Text style={styles.toolMetaText}>{tool.what}</Text>
                <Text style={styles.toolMetaLabel}>WHY I RECOMMEND IT</Text>
                <Text style={styles.toolMetaText}>{tool.why}</Text>
                <Text style={styles.toolMetaLabel}>BEST FOR</Text>
                <Text style={styles.toolMetaText}>{tool.best}</Text>
              </View>
            </View>
          </View>
        );
      })}
      <View style={styles.proTipBox}>
        <Text style={styles.proTipLabel}>PRO TIP</Text>
        <Text style={styles.proTipText}>{TOOLS.proTip}</Text>
      </View>
      <Footer />
    </Page>
  );
}

export function MagicaBonusPage() {
  return (
    <Page size="A4" style={styles.page}>
      <Text style={styles.eyebrow}>EXCLUSIVE BONUS</Text>
      <Text style={styles.h1}>{MAGICA_BONUS.title}</Text>
      <Text style={styles.bodyText}>{MAGICA_BONUS.intro}</Text>
      <View style={styles.bonusHighlightBox}>
        <Text style={styles.bonusLabel}>REFERRAL LINK</Text>
        <Text style={styles.bonusValue}>{MAGICA_BONUS.referralLink}</Text>
        <Text style={styles.bonusLabel}>PROMO CODE</Text>
        <Text style={styles.bonusValue}>{MAGICA_BONUS.promoCode}</Text>
        <Text style={styles.mutedText}>{MAGICA_BONUS.bonusNote}</Text>
        <View style={styles.ctaPill}>
          <Text style={styles.ctaPillText}>TRY MAGICA + GET 10M CREDITS</Text>
        </View>
      </View>
      <Text style={styles.h2}>How to Redeem</Text>
      <View style={{ marginTop: 6, marginBottom: 14 }}>
        {MAGICA_BONUS.steps.map(function (step, index) {
          return (
            <View style={styles.stepRow} key={index}>
              <View style={styles.stepBadge}>
                <Text style={styles.stepBadgeText}>{index + 1}</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepText}>{step}</Text>
              </View>
            </View>
          );
        })}
      </View>
      <Text style={styles.h2}>Why I Recommend Magica</Text>
      <View style={{ marginTop: 6, marginBottom: 14 }}>
        {MAGICA_BONUS.whyList.map(function (item, index) {
          return (
            <View style={styles.bulletRow} key={index}>
              <View style={styles.bulletDot} />
              <Text style={styles.bulletText}>{item}</Text>
            </View>
          );
        })}
      </View>
      <View style={styles.divider} />
      <Text style={styles.mutedText}>{MAGICA_BONUS.disclosure}</Text>
      <Footer />
    </Page>
  );
}

export function NextStepsPage() {
  return (
    <Page size="A4" style={styles.page}>
      <Text style={styles.eyebrow}>NEXT STEPS</Text>
      <Text style={styles.h1}>{NEXT_STEPS.title}</Text>
      <Text style={styles.bodyText}>{NEXT_STEPS.intro}</Text>
      <View style={styles.divider} />
      <Text style={styles.h2}>{NEXT_STEPS.challengeTitle}</Text>
      <View style={{ marginTop: 6, marginBottom: 14 }}>
        {NEXT_STEPS.challenge.map(function (item, index) {
          return (
            <View style={styles.bulletRow} key={index}>
              <View style={styles.bulletDot} />
              <Text style={styles.bulletText}>{item}</Text>
            </View>
          );
        })}
      </View>
      <Text style={styles.h2}>{NEXT_STEPS.connectTitle}</Text>
      <View style={{ marginTop: 6, marginBottom: 14 }}>
        {NEXT_STEPS.connect.map(function (item, index) {
          return (
            <View style={styles.bulletRow} key={index}>
              <View style={styles.bulletDot} />
              <Text style={styles.bulletText}>{item}</Text>
            </View>
          );
        })}
      </View>
      <View style={styles.divider} />
      <Text style={[styles.bodyText, { fontFamily: "Helvetica-Bold", color: COLORS.white }]}>
        {NEXT_STEPS.closing}
      </Text>
      <Text style={styles.mutedText}>{NEXT_STEPS.signoff}</Text>
      <Footer />
    </Page>
  );
}
