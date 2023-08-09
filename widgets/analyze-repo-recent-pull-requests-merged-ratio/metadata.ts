import {
  MetadataGenerator,
  WidgetVisualizerContext,
} from '@ossinsight/widgets-types';

const generateMetadata: MetadataGenerator<{
  repo_id: string;
}> = ({ parameters: { repo_id }, getRepo }) => {
  const main = getRepo(parseInt(repo_id));
  return {
    title: `PR merged ratio of ${main.fullName} | OSSInsight`,
  };
};

export default generateMetadata;