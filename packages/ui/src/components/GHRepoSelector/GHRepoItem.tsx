import { GHAvatar } from '../GHAvatar';
import { RemoteSelectedItem } from '../RemoteSelector';
import { RemoteRepoInfo } from './GHRepoSelector';

export function GHRepoItem ({ id, item, onClear }: { id?: string, item: RemoteRepoInfo, onClear: () => void }) {
  return (
    <RemoteSelectedItem id={id} onClear={onClear}>
      <GHAvatar name={item.fullName} size={5} />
      <span className="overflow-hidden whitespace-nowrap text-ellipsis">
        {item.fullName}
      </span>
    </RemoteSelectedItem>
  );
}