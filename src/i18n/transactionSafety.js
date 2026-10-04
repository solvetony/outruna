export const transactionSafetyMessages = {
  outrunaFee: 'Outruna fee',
  send: 'Send', approve: 'Token permission', swap: 'Swap', unknown: 'Unknown contract method. Verify the contract before continuing.',
  network: 'Network', recipient: 'Recipient / contract', spender: 'Allow this spender', amount: 'Amount / permission', spend: 'You spend', expected: 'Expected receive', provider: 'Provider', fee: 'Estimated network fee',
  unlimitedAmount: 'Unlimited', unlimited: 'This unlimited permission does not expire after this swap.', rawUnits: 'Unknown token: amount is shown in raw integer units.',
  quoteOnly: 'Quote estimate, not a guaranteed result or transaction simulation.', knownRecipient: 'Previously used recipient', compare: 'Compare full addresses', advanced: 'Advanced details', rawValue: 'Raw native value',
  poisoning: 'Possible address-poisoning attempt: this address resembles a deliberately used recipient but is different. Compare the full addresses.',
  ack_unknown: 'I understand that the contract method is unknown.', ack_unlimited: 'I explicitly authorize unlimited token spending by this spender.', ack_poisoning: 'I compared the full addresses and authorize this different recipient.',
  safe: 'No risk reported', warning: 'Warning', danger: 'Danger', forbidden: 'Transaction blocked', unavailable: 'Risk service unavailable', invalid: 'Invalid transaction', mismatch: 'Transaction differs from its review. Generate a new transaction.', cancelled: 'Transaction cancelled', busy: 'Finish the current transaction review first'
}

export const transactionSafetyTranslations = {
  en: transactionSafetyMessages,
  de: {
    outrunaFee: 'Outruna-Gebühr', send: 'Senden', approve: 'Token-Freigabe', swap: 'Tauschen', unknown: 'Unbekannte Vertragsfunktion. Prüfe den Vertrag vor dem Fortfahren.',
    network: 'Netzwerk', recipient: 'Empfänger / Vertrag', spender: 'Diesem Vertrag erlauben', amount: 'Betrag / Freigabe', spend: 'Du gibst aus', expected: 'Erwarteter Empfang', provider: 'Anbieter', fee: 'Geschätzte Netzwerkgebühr',
    unlimitedAmount: 'Unbegrenzt', unlimited: 'Diese unbegrenzte Freigabe läuft nach dem Tausch nicht ab.', rawUnits: 'Unbekannter Token: Der Betrag wird in ganzzahligen Basiseinheiten angezeigt.',
    quoteOnly: 'Angebotsschätzung, kein garantiertes Ergebnis und keine Transaktionssimulation.', knownRecipient: 'Zuvor verwendeter Empfänger', compare: 'Vollständige Adressen vergleichen', advanced: 'Erweiterte Details', rawValue: 'Nativer Betrag in Basiseinheiten',
    poisoning: 'Mögliche Adressmanipulation: Diese Adresse ähnelt einem bewusst verwendeten Empfänger, ist aber anders. Vergleiche die vollständigen Adressen.',
    ack_unknown: 'Ich verstehe, dass die Vertragsfunktion unbekannt ist.', ack_unlimited: 'Ich erlaube diesem Vertrag ausdrücklich unbegrenzte Token-Ausgaben.', ack_poisoning: 'Ich habe die vollständigen Adressen verglichen und bestätige diesen anderen Empfänger.',
    safe: 'Kein Risiko gemeldet', warning: 'Warnung', danger: 'Gefahr', forbidden: 'Transaktion blockiert', unavailable: 'Risikodienst nicht verfügbar', invalid: 'Ungültige Transaktion', mismatch: 'Die Transaktion weicht von ihrer Prüfung ab. Erstelle eine neue Transaktion.', cancelled: 'Transaktion abgebrochen', busy: 'Schließe zuerst die aktuelle Transaktionsprüfung ab'
  },
  es: {
    outrunaFee: 'Comisión de Outruna', send: 'Enviar', approve: 'Permiso de token', swap: 'Intercambiar', unknown: 'Método de contrato desconocido. Verifica el contrato antes de continuar.',
    network: 'Red', recipient: 'Destinatario / contrato', spender: 'Autorizar a este contrato', amount: 'Importe / permiso', spend: 'Gastas', expected: 'Recepción esperada', provider: 'Proveedor', fee: 'Comisión de red estimada',
    unlimitedAmount: 'Ilimitado', unlimited: 'Este permiso ilimitado no caduca después del intercambio.', rawUnits: 'Token desconocido: el importe se muestra en unidades enteras mínimas.',
    quoteOnly: 'Estimación de la cotización, no un resultado garantizado ni una simulación de transacción.', knownRecipient: 'Destinatario usado anteriormente', compare: 'Comparar direcciones completas', advanced: 'Detalles avanzados', rawValue: 'Valor nativo en unidades mínimas',
    poisoning: 'Posible suplantación de dirección: esta dirección se parece a un destinatario utilizado deliberadamente, pero es diferente. Compara las direcciones completas.',
    ack_unknown: 'Entiendo que el método del contrato es desconocido.', ack_unlimited: 'Autorizo expresamente a este contrato a gastar tokens sin límite.', ack_poisoning: 'He comparado las direcciones completas y autorizo a este destinatario diferente.',
    safe: 'Sin riesgos reportados', warning: 'Advertencia', danger: 'Peligro', forbidden: 'Transacción bloqueada', unavailable: 'Servicio de riesgos no disponible', invalid: 'Transacción inválida', mismatch: 'La transacción no coincide con su revisión. Genera una nueva transacción.', cancelled: 'Transacción cancelada', busy: 'Termina primero la revisión de la transacción actual'
  },
  ru: {
    outrunaFee: 'Комиссия Outruna', send: 'Отправить', approve: 'Разрешение на токены', swap: 'Обмен', unknown: 'Неизвестный метод контракта. Проверьте контракт перед продолжением.',
    network: 'Сеть', recipient: 'Получатель / контракт', spender: 'Разрешить этому контракту', amount: 'Сумма / разрешение', spend: 'Вы отдаёте', expected: 'Ожидаемое получение', provider: 'Провайдер', fee: 'Оценка комиссии сети',
    unlimitedAmount: 'Без ограничений', unlimited: 'Это неограниченное разрешение не истекает после обмена.', rawUnits: 'Неизвестный токен: сумма показана в целых минимальных единицах.',
    quoteOnly: 'Оценка котировки, а не гарантированный результат или симуляция транзакции.', knownRecipient: 'Ранее использованный получатель', compare: 'Сравнить полные адреса', advanced: 'Подробные данные', rawValue: 'Сумма нативного актива в минимальных единицах',
    poisoning: 'Возможная подмена адреса: этот адрес похож на получателя, которому вы намеренно отправляли средства, но отличается. Сравните полные адреса.',
    ack_unknown: 'Я понимаю, что метод контракта неизвестен.', ack_unlimited: 'Я явно разрешаю этому контракту тратить токены без ограничений.', ack_poisoning: 'Я сравнил полные адреса и подтверждаю этого другого получателя.',
    safe: 'Рисков не обнаружено', warning: 'Предупреждение', danger: 'Опасность', forbidden: 'Транзакция заблокирована', unavailable: 'Сервис проверки рисков недоступен', invalid: 'Некорректная транзакция', mismatch: 'Транзакция отличается от проверенной. Создайте новую транзакцию.', cancelled: 'Транзакция отменена', busy: 'Сначала завершите проверку текущей транзакции'
  },
  zh: {
    outrunaFee: 'Outruna 手续费', send: '发送', approve: '代币授权', swap: '兑换', unknown: '未知合约方法。继续前请核实合约。',
    network: '网络', recipient: '收款地址 / 合约', spender: '授权此合约', amount: '金额 / 授权', spend: '您支付', expected: '预计收到', provider: '提供方', fee: '预估网络费',
    unlimitedAmount: '无限额', unlimited: '此无限额授权在兑换后不会失效。', rawUnits: '未知代币：金额以最小整数单位显示。',
    quoteOnly: '报价估算，并非保证的结果或交易模拟。', knownRecipient: '此前使用的收款地址', compare: '比较完整地址', advanced: '高级详情', rawValue: '原生资产最小单位金额',
    poisoning: '可能存在地址投毒：此地址与您主动使用过的收款地址相似，但并不相同。请比较完整地址。',
    ack_unknown: '我了解此合约方法未知。', ack_unlimited: '我明确授权此合约无限额支出代币。', ack_poisoning: '我已比较完整地址，并授权向此不同的收款地址发送。',
    safe: '未报告风险', warning: '警告', danger: '危险', forbidden: '交易已阻止', unavailable: '风险服务不可用', invalid: '无效交易', mismatch: '交易与审核内容不一致。请重新生成交易。', cancelled: '交易已取消', busy: '请先完成当前交易审核'
  },
  hi: {
    outrunaFee: 'Outruna शुल्क', send: 'भेजें', approve: 'टोकन अनुमति', swap: 'स्वैप', unknown: 'अज्ञात कॉन्ट्रैक्ट विधि। आगे बढ़ने से पहले कॉन्ट्रैक्ट जाँचें।',
    network: 'नेटवर्क', recipient: 'प्राप्तकर्ता / कॉन्ट्रैक्ट', spender: 'इस कॉन्ट्रैक्ट को अनुमति दें', amount: 'राशि / अनुमति', spend: 'आप खर्च करेंगे', expected: 'अपेक्षित प्राप्ति', provider: 'प्रदाता', fee: 'अनुमानित नेटवर्क शुल्क',
    unlimitedAmount: 'असीमित', unlimited: 'यह असीमित अनुमति स्वैप के बाद समाप्त नहीं होती।', rawUnits: 'अज्ञात टोकन: राशि न्यूनतम पूर्णांक इकाइयों में दिखाई गई है।',
    quoteOnly: 'कोट का अनुमान, गारंटीकृत परिणाम या लेनदेन सिमुलेशन नहीं।', knownRecipient: 'पहले उपयोग किया गया प्राप्तकर्ता', compare: 'पूरे पते की तुलना करें', advanced: 'उन्नत विवरण', rawValue: 'मूल परिसंपत्ति की न्यूनतम इकाइयों में राशि',
    poisoning: 'संभावित पता-जालसाजी: यह पता जानबूझकर उपयोग किए गए प्राप्तकर्ता जैसा है, लेकिन अलग है। पूरे पते की तुलना करें।',
    ack_unknown: 'मैं समझता हूँ कि कॉन्ट्रैक्ट विधि अज्ञात है।', ack_unlimited: 'मैं इस कॉन्ट्रैक्ट को असीमित टोकन खर्च करने की स्पष्ट अनुमति देता हूँ।', ack_poisoning: 'मैंने पूरे पते की तुलना की है और इस अलग प्राप्तकर्ता को अनुमति देता हूँ।',
    safe: 'कोई जोखिम रिपोर्ट नहीं हुआ', warning: 'चेतावनी', danger: 'खतरा', forbidden: 'लेनदेन रोका गया', unavailable: 'जोखिम सेवा अनुपलब्ध', invalid: 'अमान्य लेनदेन', mismatch: 'लेनदेन समीक्षा से मेल नहीं खाता। नया लेनदेन बनाएँ।', cancelled: 'लेनदेन रद्द', busy: 'पहले वर्तमान लेनदेन की समीक्षा पूरी करें'
  },
  bn: {
    outrunaFee: 'Outruna ফি', send: 'পাঠান', approve: 'টোকেনের অনুমতি', swap: 'সোয়াপ', unknown: 'অজানা কন্ট্র্যাক্ট পদ্ধতি। এগোনোর আগে কন্ট্র্যাক্ট যাচাই করুন।',
    network: 'নেটওয়ার্ক', recipient: 'প্রাপক / কন্ট্র্যাক্ট', spender: 'এই কন্ট্র্যাক্টকে অনুমতি দিন', amount: 'পরিমাণ / অনুমতি', spend: 'আপনি ব্যয় করবেন', expected: 'প্রত্যাশিত প্রাপ্তি', provider: 'প্রদানকারী', fee: 'আনুমানিক নেটওয়ার্ক ফি',
    unlimitedAmount: 'সীমাহীন', unlimited: 'এই সীমাহীন অনুমতি সোয়াপের পরে শেষ হয় না।', rawUnits: 'অজানা টোকেন: পরিমাণ সর্বনিম্ন পূর্ণসংখ্যা এককে দেখানো হয়েছে।',
    quoteOnly: 'কোটের অনুমান, নিশ্চিত ফলাফল বা লেনদেন সিমুলেশন নয়।', knownRecipient: 'আগে ব্যবহৃত প্রাপক', compare: 'সম্পূর্ণ ঠিকানা তুলনা করুন', advanced: 'বিস্তারিত তথ্য', rawValue: 'মূল সম্পদের সর্বনিম্ন এককে পরিমাণ',
    poisoning: 'সম্ভাব্য ঠিকানা জালিয়াতি: এই ঠিকানা ইচ্ছাকৃতভাবে ব্যবহৃত প্রাপকের মতো, কিন্তু আলাদা। সম্পূর্ণ ঠিকানা তুলনা করুন।',
    ack_unknown: 'আমি বুঝেছি যে কন্ট্র্যাক্ট পদ্ধতিটি অজানা।', ack_unlimited: 'আমি এই কন্ট্র্যাক্টকে সীমাহীন টোকেন ব্যয়ের স্পষ্ট অনুমতি দিচ্ছি।', ack_poisoning: 'আমি সম্পূর্ণ ঠিকানা তুলনা করেছি এবং এই ভিন্ন প্রাপককে অনুমোদন করছি।',
    safe: 'কোনো ঝুঁকি জানানো হয়নি', warning: 'সতর্কতা', danger: 'বিপদ', forbidden: 'লেনদেন অবরুদ্ধ', unavailable: 'ঝুঁকি পরিষেবা অনুপলব্ধ', invalid: 'অবৈধ লেনদেন', mismatch: 'লেনদেন পর্যালোচনার সঙ্গে মেলে না। নতুন লেনদেন তৈরি করুন।', cancelled: 'লেনদেন বাতিল', busy: 'আগে বর্তমান লেনদেনের পর্যালোচনা শেষ করুন'
  }
}

export const backupVerificationMessages = {
  en: { verifyBackup: 'Verify backup', backupVerified: 'Backup verified', verified: 'Verified', backupDifferent: 'This backup belongs to a different Tari wallet.', verificationHint: 'Check that this file and password restore your wallet.', verificationNotice: 'Restores this wallet. Safe storage is not verified.', recoveryBackup: 'Recovery backup', notVerified: 'Not verified', unsupportedBackup: 'Unsupported backup format.' },
  de: { verifyBackup: 'Backup prüfen', backupVerified: 'Backup geprüft', verified: 'Geprüft', backupDifferent: 'Dieses Backup gehört zu einer anderen Tari-Wallet.', verificationHint: 'Prüfe, ob Datei und Passwort deine Wallet wiederherstellen.', verificationNotice: 'Stellt diese Wallet wieder her. Sichere Aufbewahrung ist nicht geprüft.', recoveryBackup: 'Wiederherstellungsbackup', notVerified: 'Nicht geprüft', unsupportedBackup: 'Nicht unterstütztes Backup-Format.' },
  es: { verifyBackup: 'Verificar copia', backupVerified: 'Copia verificada', verified: 'Verificada', backupDifferent: 'Esta copia pertenece a otra wallet Tari.', verificationHint: 'Comprueba que el archivo y la contraseña restauran tu wallet.', verificationNotice: 'Restaura esta wallet. No verifica el almacenamiento seguro.', recoveryBackup: 'Copia de recuperación', notVerified: 'Sin verificar', unsupportedBackup: 'Formato de copia no compatible.' },
  ru: { verifyBackup: 'Проверить копию', backupVerified: 'Копия проверена', verified: 'Проверено', backupDifferent: 'Эта копия принадлежит другому кошельку Tari.', verificationHint: 'Проверьте, что файл и пароль восстанавливают ваш кошелёк.', verificationNotice: 'Восстанавливает этот кошелёк. Надёжность хранения не проверена.', recoveryBackup: 'Копия для восстановления', notVerified: 'Не проверено', unsupportedBackup: 'Неподдерживаемый формат резервной копии.' },
  zh: { verifyBackup: '验证备份', backupVerified: '备份已验证', verified: '已验证', backupDifferent: '此备份属于另一个 Tari 钱包。', verificationHint: '检查此文件和密码能否恢复您的钱包。', verificationNotice: '可恢复此钱包，但未验证备份是否妥善保存。', recoveryBackup: '恢复备份', notVerified: '未验证', unsupportedBackup: '不支持的备份格式。' },
  hi: { verifyBackup: 'बैकअप जाँचें', backupVerified: 'बैकअप सत्यापित', verified: 'सत्यापित', backupDifferent: 'यह बैकअप किसी अन्य Tari वॉलेट का है।', verificationHint: 'जाँचें कि फ़ाइल और पासवर्ड आपका वॉलेट पुनर्स्थापित करते हैं।', verificationNotice: 'यह वॉलेट पुनर्स्थापित करता है। सुरक्षित भंडारण सत्यापित नहीं है।', recoveryBackup: 'पुनर्प्राप्ति बैकअप', notVerified: 'सत्यापित नहीं', unsupportedBackup: 'असमर्थित बैकअप प्रारूप।' },
  bn: { verifyBackup: 'ব্যাকআপ যাচাই', backupVerified: 'ব্যাকআপ যাচাই হয়েছে', verified: 'যাচাই হয়েছে', backupDifferent: 'এই ব্যাকআপ অন্য একটি Tari ওয়ালেটের।', verificationHint: 'ফাইল ও পাসওয়ার্ড আপনার ওয়ালেট পুনরুদ্ধার করে কি না যাচাই করুন।', verificationNotice: 'এই ওয়ালেট পুনরুদ্ধার করে। নিরাপদ সংরক্ষণ যাচাই করা হয়নি।', recoveryBackup: 'পুনরুদ্ধারের ব্যাকআপ', notVerified: 'যাচাই হয়নি', unsupportedBackup: 'অসমর্থিত ব্যাকআপ ফরম্যাট।' }
}
