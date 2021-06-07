var Botkit = require("./lib/Botkit.js"); //パス注意
var os = require("os");

var controller = Botkit.slackbot({
    debug: true,
});

var bot = controller.spawn({
    token: "xoxb-552984506752-2135894275414-JWTDBa3MOwss71scsFbkq8go"
}).startRTM();

let num = 0;

controller.on("direct_message", (bot, message) => {

    if (num % 2 == 0) {
        var user_name = "質問です！";
    } else {
        var user_name = "質問デス！";
    };
    num = num + 1;

    bot.reply(message, "チャンネルに質問を投稿しました");

    bot.startConversation({  channel : "C024WEK8TJL" }, (err, convo) => {
        var send_message = {
          type: "message",
          channel: "C024WEK8TJL",
          text: message.text,
          username: user_name,
          thread_ts: null,
          reply_broadcast: null,
          parse: null,
          link_names: null,
          attachments: null,
          unfurl_links: null,
          unfurl_media: null,
          icon_url: null,
          icon_emoji: ":raised_hand:",
          as_user: true
        }
        convo.say(send_message);
    });
});