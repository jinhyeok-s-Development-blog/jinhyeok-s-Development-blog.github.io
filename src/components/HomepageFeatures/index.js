import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: '컴퓨터공학과 4학년',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                18년도 대학에 입학하였고, <br></br> 2025년 기준 4학년에 재학중입니다. <br></br>
                데이터와 트래픽 처리에 관심이 많아 서버 개발자로서 공부를 하고 있습니다.
            </>
        ),
    },
    {
        title: '관심 기술',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                spring, Go, jpa, RDBMS, NoSql, kafka 등을 자주 사용하고 있으며 안정적인 아키텍처를 만드는 기술을
                공부하고 있습니다.
            </>
        ),
    },
    {
        title: '마이그레이션 경험',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                3학년 현장실습을 통해 5달동안 레거시코드를 차세대 프레임워크인 넥사크로로 마이그레이션하는 작업을
                진행하였습니다.
            </>
        ),
    },
];

function Feature({ Svg, title, description }) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
