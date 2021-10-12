import { restoreStorage } from '@common/plugin';

const events: kintone.EventType[] = ['mobile.app.record.edit.show'];

const action: launcher.Action = async (event, pluginId) => {
  const config = restoreStorage(pluginId);

  console.log('プラグインのリソースを、GitHub経由で実行しました！', { pluginId, event, config });
  return event;
};

export default { events, action };
