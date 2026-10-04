export const snapshotUiMessages = {
  en: { network: 'Tari Mainnet', strengthStrongMessage: 'Estimated strength is high. Use a long, unique password.' },
  de: { network: 'Tari Mainnet', strengthStrongMessage: 'Hohe geschätzte Stärke. Verwende ein langes, einzigartiges Passwort.' },
  es: { network: 'Tari Mainnet', strengthStrongMessage: 'La fuerza estimada es alta. Usa una contraseña larga y única.' },
  ru: { network: 'Основная сеть Tari', strengthStrongMessage: 'Оценка стойкости высокая. Используйте длинный уникальный пароль.' },
  zh: { network: 'Tari 主网', strengthStrongMessage: '估计强度较高。请使用长且独特的密码。' },
  hi: { network: 'Tari मेननेट', strengthStrongMessage: 'अनुमानित मजबूती अधिक है। लंबा और अनूठा पासवर्ड इस्तेमाल करें।' },
  bn: { network: 'Tari মেইননেট', strengthStrongMessage: 'আনুমানিক শক্তি বেশি। দীর্ঘ ও অনন্য পাসওয়ার্ড ব্যবহার করুন।' }
}

const receiveMessages = {
  en: ['Receive XTM on Tari Mainnet', 'Only send XTM on Tari Mainnet to this address. Sending other assets or funds from another network may result in permanent loss.'],
  de: ['XTM auf Tari Mainnet empfangen', 'Sende nur XTM auf Tari Mainnet an diese Adresse. Andere Assets oder Mittel aus einem anderen Netzwerk können dauerhaft verloren gehen.'],
  es: ['Recibir XTM en Tari Mainnet', 'Envía XTM a esta dirección solo en Tari Mainnet. Enviar otros activos o fondos desde otra red puede causar una pérdida permanente.'],
  ru: ['Получить XTM в основной сети Tari', 'Отправляйте на этот адрес XTM только в основной сети Tari. Отправка других активов или средств из другой сети может привести к их безвозвратной потере.'],
  zh: ['在 Tari 主网接收 XTM', '请仅向此地址发送 Tari 主网上的 XTM。发送其他资产或来自其他网络的资金可能导致永久损失。'],
  hi: ['Tari मेननेट पर XTM प्राप्त करें', 'इस पते पर केवल Tari मेननेट का XTM भेजें। दूसरे नेटवर्क से अन्य संपत्ति या फ़ंड भेजने से स्थायी हानि हो सकती है।'],
  bn: ['Tari মেইননেটে XTM গ্রহণ করুন', 'শুধু Tari মেইননেটে এই ঠিকানায় XTM পাঠান। অন্য অ্যাসেট বা অন্য নেটওয়ার্ক থেকে তহবিল পাঠালে সেগুলি স্থায়ীভাবে হারাতে পারে।']
}
for (const [locale, [receiveSubtitle, receiveNotice]] of Object.entries(receiveMessages)) Object.assign(snapshotUiMessages[locale], { receiveSubtitle, receiveNotice })
