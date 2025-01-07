import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '生动',
    Svg: require('@site/static/img/Imagination.svg').default,
    description: (
      <>
        「荒原之梦考研数学」坚持用直观生动的方式解析生涩的知识点和题目，让同学们快乐学习，快速提分。
      </>
    ),
  },
  {
    title: '专注',
    Svg: require('@site/static/img/focus.svg').default,
    description: (
      <>
        荒原之梦专注于考研数学领域，数年如一日，不断深耕，只求甚解，用实力赢取学子们的信任。
      </>
    ),
  },
  {
    title: '卓越',
    Svg: require('@site/static/img/excellence.svg').default,
    description: (
      <>
        「荒原之梦考研数学」中的每一篇文章、每一节课、每一份习题，都力求精益求精，用坚实的质量做好的教育。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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
