
import { exodusChallenges } from './exodus';

try {
    console.log('Exodus challenges found:', exodusChallenges.length);
    if (exodusChallenges.length > 0) {
        console.log('First challenge title:', exodusChallenges[0].title);
        console.log('Last challenge title:', exodusChallenges[exodusChallenges.length - 1].title);
    } else {
        console.error('Exodus challenges array is empty');
    }
} catch (error) {
    console.error('Error accessing exodusChallenges:', error);
}
