import * as discord from 'eris';
import { createTranscript } from '../src';

const client = new discord.Client(process.env.TOKEN!, {
    intents: [
        discord.Constants.Intents.guilds,
        discord.Constants.Intents.guildMessages,
    ],
});

client.on('ready', async () => {
    /** @type {discord.TextChannel} */
    const channel = await client.getRESTChannel(process.env.CHANNEL!);

    // @ts-expect-error
    if (!channel || channel.type !== discord.Constants.ChannelTypes.GUILD_TEXT || channel.type === discord.Constants.ChannelTypes.DM) {
        console.error('Invalid channel provided.');
        process.exit(1);
    }

    const attachment = await createTranscript(channel, {
        minify: true,
        useCDN: false,
    });

    await channel.createMessage({}, {
      name: <string> attachment.name,
      file: <Buffer> attachment.file
    });

    client.disconnect({ reconnect: false });
    process.exit(0);
});