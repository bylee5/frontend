// @flow
import { commercialPrebidSafeframe } from 'common/modules/experiments/tests/commercial-prebid-safeframe.js';
import { commercialAdVerification } from 'common/modules/experiments/tests/commercial-ad-verification.js';
import { commercialAdVerificationQA } from 'common/modules/experiments/tests/commercial-ad-verification-qa.js';
import { commercialCmpCustomise } from 'common/modules/experiments/tests/commercial-cmp-customise.js';
import { commercialOutbrainTesting } from 'common/modules/experiments/tests/commercial-outbrain-testing.js';
import { commercialConsentGlobalBanner } from 'common/modules/experiments/tests/commercial-consent-global-banner';
import { askFourEarning } from 'common/modules/experiments/tests/contributions-epic-ask-four-earning';
import { acquisitionsEpicAlwaysAskIfTagged } from 'common/modules/experiments/tests/acquisitions-epic-always-ask-if-tagged';
import { adblockTest } from 'common/modules/experiments/tests/adblock-ask';
import {
    februaryMomentBannerCopyMorePeople,
    februaryMomentBannerThankYou,
} from 'common/modules/experiments/tests/february-moment-banner';

export const concurrentTests: $ReadOnlyArray<ABTest> = [
    commercialPrebidSafeframe,
    commercialAdVerification,
    commercialAdVerificationQA,
    commercialCmpCustomise,
    commercialOutbrainTesting,
    adblockTest,
    commercialConsentGlobalBanner,
];

export const epicTests: $ReadOnlyArray<EpicABTest> = [
    askFourEarning,
    acquisitionsEpicAlwaysAskIfTagged,
];

export const engagementBannerTests: $ReadOnlyArray<AcquisitionsABTest> = [
    februaryMomentBannerCopyMorePeople,
    februaryMomentBannerThankYou,
];
