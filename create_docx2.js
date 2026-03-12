const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } = require('docx');
const fs = require('fs');

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, color: "000000" },
        paragraph: { spacing: { before: 240, after: 120 } } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, color: "333333" },
        paragraph: { spacing: { before: 180, after: 100 } } }
    ]
  },
  sections: [{
    properties: { page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
    children: [
      new Paragraph({ heading: HeadingLevel.TITLE, children: [new TextRun({ text: "企业客户开发话术模板", bold: true, size: 44 })] }),

      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: "第一步：找到联系人", bold: true })] }),
      new Paragraph({ children: [new TextRun({ text: "目标岗位：行政经理、HR总监、采购经理、差旅管理员", bold: true })] }),
      new Paragraph({ children: [new TextRun({ text: " ", size: 16 })] }),
      new Paragraph({ children: [new TextRun({ text: "搜索渠道：", bold: true })] }),
      new Paragraph({ children: [new TextRun({ text: "1. 微信：搜索公司名+行政/HR/采购，直接加好友" })] }),
      new Paragraph({ children: [new TextRun({ text: "2. 脉脉：搜索公司名，找到对应岗位的人" })] }),
      new Paragraph({ children: [new TextRun({ text: "3. LinkedIn：搜索公司名+行政/HR/采购" })] }),
      new Paragraph({ children: [new TextRun({ text: "4. Boss直聘：查看该公司招聘的行政/HR岗位，能看到人名" })] }),

      new Paragraph({ children: [new TextRun({ text: " ", size: 22 })] }),
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: "第二步：初次联系话术", bold: true })] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: "场景1：微信/短信首次联系" })] }),
      new Paragraph({ children: [new TextRun({ text: "话术A（直接型）", bold: true })] }),
      new Paragraph({ children: [new TextRun({ text: "您好！我是XX机票代理，专门帮企业做国际机票方案。" })] }),
      new Paragraph({ children: [new TextRun({ text: "我们服务过多家跨境电商企业，比如XX公司，平均帮助企业节省15%-20%差旅成本。" })] }),
      new Paragraph({ children: [new TextRun({ text: "想了解一下贵司目前国际差旅是怎么安排的？不收费帮您做个方案对比参考。" })] }),

      new Paragraph({ children: [new TextRun({ text: " ", size: 16 })] }),
      new Paragraph({ children: [new TextRun({ text: "话术B（请教型）", bold: true })] }),
      new Paragraph({ children: [new TextRun({ text: "您好！我是做企业国际机票服务的。" })] }),
      new Paragraph({ children: [new TextRun({ text: "最近跨境电商行业出差不少，想请教一下：贵司目前国际机票是自行预订还是统一采购？有哪些痛点？" })] }),
      new Paragraph({ children: [new TextRun({ text: "如果您方便的话，想约个10分钟电话做个简单介绍，看看有没有能帮上忙的地方。" })] }),

      new Paragraph({ children: [new TextRun({ text: " ", size: 16 })] }),
      new Paragraph({ children: [new TextRun({ text: "话术C（案例切入型）", bold: true })] }),
      new Paragraph({ children: [new TextRun({ text: "您好！看到贵司业务发展很好，海外业务拓展频繁。" })] }),
      new Paragraph({ children: [new TextRun({ text: "我们专门帮跨境电商企业做国际机票方案，已服务XX、XX等企业，帮他们平均节省20%差旅成本，支持月结垫资。" })] }),
      new Paragraph({ children: [new TextRun({ text: "想加个微信，后续有差旅需求时方便随时咨询？" })] }),

      new Paragraph({ children: [new TextRun({ text: " ", size: 22 })] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: "场景2：脉脉/LinkedIn站内信" })] }),
      new Paragraph({ children: [new TextRun({ text: "脉脉话术", bold: true })] }),
      new Paragraph({ children: [new TextRun({ text: "您好！看到您在[公司名]负责行政/采购工作。" })] }),
      new Paragraph({ children: [new TextRun({ text: "我们是一家专业做企业国际机票的公司，已服务多家跨境电商企业，帮助企业节省15%-25%差旅成本，支持月结垫资和7×24小时服务。" })] }),
      new Paragraph({ children: [new TextRun({ text: "想加个微信，有机会帮贵司做个免费的方案对比参考，您看可以吗？" })] }),

      new Paragraph({ children: [new TextRun({ text: " ", size: 16 })] }),
      new Paragraph({ children: [new TextRun({ text: "LinkedIn话术", bold: true })] }),
      new Paragraph({ children: [new TextRun({ text: "Hi [名字]," })] }),
      new Paragraph({ children: [new TextRun({ text: "I noticed you're working at [公司名] and handling admin/travel arrangements." })] }),
      new Paragraph({ children: [new TextRun({ text: "We're a professional corporate travel agency specializing in international flights, having helped companies like [案例公司] save 15-25% on travel costs." })] }),
      new Paragraph({ children: [new TextRun({ text: "Would love to connect and offer a free comparison of your current travel setup. Happy to chat on WeChat or a quick call." })] }),
      new Paragraph({ children: [new TextRun({ text: "Best regards," })] }),
      new Paragraph({ children: [new TextRun({ text: "[你的名字]" })] }),

      new Paragraph({ children: [new TextRun({ text: " ", size: 22 })] }),
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: "第三步：电话沟通话术", bold: true })] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: "开场白（30秒）" })] }),
      new Paragraph({ children: [new TextRun({ text: "您好！我是XX机票代理的[你的名字]，专门帮企业做国际机票方案。" })] }),
      new Paragraph({ children: [new TextRun({ text: "我们服务跨境电商行业已经X年了，像XX公司、XX公司都是我们的客户。" })] }),
      new Paragraph({ children: [new TextRun({ text: "想了解一下：贵司目前国际差旅是怎么安排的？有没有遇到什么痛点？" })] }),

      new Paragraph({ children: [new TextRun({ text: " ", size: 16 })] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: "价值展示（1分钟）" })] }),
      new Paragraph({ children: [new TextRun({ text: "我们能帮企业解决几个核心问题：", bold: true })] }),
      new Paragraph({ children: [new TextRun({ text: "1. 成本优化 - 航线组合优化（开口票、双开口）、团队票专属价，平均节省15%-25%" })] }),
      new Paragraph({ children: [new TextRun({ text: "2. 服务保障 - 7×24小时专人服务，改签退票专人跟进" })] }),
      new Paragraph({ children: [new TextRun({ text: "3. 资金支持 - 月结垫资，最长30天账期，解决企业现金流压力" })] }),
      new Paragraph({ children: [new TextRun({ text: "4. 便捷管理 - 提供对账单、明细报表，方便财务核销" })] }),

      new Paragraph({ children: [new TextRun({ text: " ", size: 16 })] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: "异议处理" })] }),
      new Paragraph({ children: [new TextRun({ text: "客户说'我们已有供应商' → 应对：理解，您可以拿我们的方案做个对比参考，完全免费。不一定更换，只是帮您掌握市场行情" })] }),
      new Paragraph({ children: [new TextRun({ text: "客户说'不需要' → 应对：好的，那加个微信存个联系方式？后续有需求随时可以咨询，也欢迎推荐给朋友" })] }),
      new Paragraph({ children: [new TextRun({ text: "客户说'太忙了' → 应对：理解，那我先发个微信资料给您，您有空时看下。有任何问题随时找我" })] }),

      new Paragraph({ children: [new TextRun({ text: " ", size: 22 })] }),
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: "第四步：跟进话术", bold: true })] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: "首次跟进（1天后）" })] }),
      new Paragraph({ children: [new TextRun({ text: "您好！昨天跟您聊完一直没收到回复，想再打扰一下。" })] }),
      new Paragraph({ children: [new TextRun({ text: "我把我们的服务简介和合作案例发您微信了，您可以抽空看一下。" })] }),
      new Paragraph({ children: [new TextRun({ text: "跨境电商行业最近差旅需求大，我们也想多支持一些行业内的企业。" })] }),
      new Paragraph({ children: [new TextRun({ text: "有任何问题随时找我，感谢！" })] }),

      new Paragraph({ children: [new TextRun({ text: " ", size: 16 })] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: "二次跟进（3天后）" })] }),
      new Paragraph({ children: [new TextRun({ text: "您好！想再问一下：之前发的资料看了吗？" })] }),
      new Paragraph({ children: [new TextRun({ text: "最近XX航线价格波动挺大的，如果贵司近期有出行计划，可以随时找我查最新价格。" })] }),
      new Paragraph({ children: [new TextRun({ text: "不着急决定，先交个朋友备用。" })] }),

      new Paragraph({ children: [new TextRun({ text: " ", size: 16 })] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: "成交客户转介绍请求" })] }),
      new Paragraph({ children: [new TextRun({ text: "感谢您的信任！后续有任何国际机票需求随时找我。" })] }),
      new Paragraph({ children: [new TextRun({ text: "如果您身边有其他做跨境电商的朋友也需要机票服务，方便的话麻烦推荐一下？" })] }),
      new Paragraph({ children: [new TextRun({ text: "成交后我给您发个红包感谢！" })] }),

      new Paragraph({ children: [new TextRun({ text: " ", size: 22 })] }),
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: "微信自我介绍模板", bold: true })] }),
      new Paragraph({ children: [new TextRun({ text: "（首次通过好友）", bold: true })] }),
      new Paragraph({ children: [new TextRun({ text: "您好！感谢通过的好友申请。" })] }),
      new Paragraph({ children: [new TextRun({ text: "我是XX，专注企业国际机票服务X年，服务过XX、XX等跨境电商企业。" })] }),
      new Paragraph({ children: [new TextRun({ text: "我们的优势：", bold: true })] }),
      new Paragraph({ children: [new TextRun({ text: "✓ 平均帮企业节省15%-25%差旅成本" })] }),
      new Paragraph({ children: [new TextRun({ text: "✓ 支持月结垫资，解决企业现金流" })] }),
      new Paragraph({ children: [new TextRun({ text: "✓ 7×24小时专人服务" })] }),
      new Paragraph({ children: [new TextRun({ text: "后续有国际机票需求随时找我，免费查价和做方案对比。" })] }),
      new Paragraph({ children: [new TextRun({ text: "请问贵司最近有出行计划吗？" })] }),

      new Paragraph({ children: [new TextRun({ text: " ", size: 22 })] }),
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: "快速执行动作", bold: true })] }),
      new Paragraph({ children: [new TextRun({ text: "1. 今天：把上面的微信自我介绍改成你自己的版本" })] }),
      new Paragraph({ children: [new TextRun({ text: "2. 明天：开始搜索目标企业的联系人（微信/脉脉）" })] }),
      new Paragraph({ children: [new TextRun({ text: "3. 后天：开始发送首批联系话术，每天联系3-5家" })] }),
      new Paragraph({ children: [new TextRun({ text: "4. 第1周：联系完第一批10家企业，记录反馈" })] })
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("C:/Users/86130/lobsterai/project/企业客户开发话术模板.docx", buffer);
  console.log("话术模板文档创建成功！");
});
