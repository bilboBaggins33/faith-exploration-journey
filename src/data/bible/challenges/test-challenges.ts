
import { getBibleChallengeByBookAndChapter } from './index';

const testExodus = () => {
    const challenge = getBibleChallengeByBookAndChapter('exodus', 1);
    if (challenge) {
        console.log('Success: Found Exodus 1 challenge');
        console.log('Title:', challenge.title);
    } else {
        console.log('Error: Exodus 1 challenge not found');
    }
};

const testGenesis = () => {
    const challenge = getBibleChallengeByBookAndChapter('genesis', 1);
    if (challenge) {
        console.log('Success: Found Genesis 1 challenge');
        console.log('Title:', challenge.title);
    } else {
        console.log('Error: Genesis 1 challenge not found');
    }
};

testGenesis();
testExodus();
