const aboutText = "Purdue MIND’s purpose is to promote and grow the biomedical engineering community at Purdue by providing \
undergraduate students the opportunity to engage in hands-on activities, discuss current research, and network with a \
wide range of faculty both within and outside of Purdue including professors, physicians, and engineers. We are a unique, \
multidisciplinary student organization that seeks to innovate and develop medical technology. Our overall goals are listed below:";

const goal1 = "To give Purdue undergraduates extensive experience with medical technology market research, design, prototyping, \
validation, regulatory approval, intellectual property management, and transition to market.";

const goal2 = "To allow highly motivated students to network with each other and with professors and medical professionals and \
to collaborate on a significant, long-term, medically-focused project.";

const goal3 = "To recognize the work done on the project through submission to national design competitions.";

let aboutTextList = [ aboutText, goal1, goal2, goal3 ];

const name0 = "Jenna Munshi";
const pos0  = "President";
const desc0 = "Yo.";

const name1 = "Kevin Bautista";
const pos1  = "Vice President";
const desc1 = "Bro.";

const name2 = "Akio Fujita";
const pos2  = "Treasurer";
const desc2 = "Joe.";

let officerNameList = [ name0, name1, name2 ];
let officerPosList  = [ pos0,  pos1,  pos2  ];
let officerDescList = [ desc0, desc1, desc2 ];

let textList = {
    aboutTexts: aboutTextList,
    officerNames: officerNameList,
    officerPoses: officerPosList,
    officerDescs: officerDescList
};

export default textList;