const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, Table, TableRow, TableCell, BorderStyle, WidthType, ShadingType, VerticalAlign } = require('docx');
const fs = require('fs');

const tableBorder = { style: BorderStyle.SINGLE, size: 8, color: "CCCCCC" };
const cellBorders = { top: tableBorder, bottom: tableBorder, left: tableBorder, right: tableBorder };

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
      new Paragraph({ heading: HeadingLevel.TITLE, children: [new TextRun({ text: "跨境电商企业客户开发执行计划", bold: true, size: 44 })] }),

      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: "第1周执行清单", bold: true })] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: "Day 1 今天" })] }),
      new Paragraph({ children: [new TextRun({ text: "□ 优化你的微信自我介绍（发给我帮你改）" })] }),
      new Paragraph({ children: [new TextRun({ text: "□ 注册脉脉账号（如果还没有）" })] }),
      new Paragraph({ children: [new TextRun({ text: "□ 下载目标企业名单" })] }),

      new Paragraph({ children: [new TextRun({ text: " ", size: 16 })] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: "Day 2 明天" })] }),
      new Paragraph({ children: [new TextRun({ text: "□ 搜索第1-5家企业的联系人", bold: true })] }),
      new Paragraph({ children: [new TextRun({ text: "  企业：安克创新、泽宝科技、有棵树、赛维时代、子不语" })] }),
      new Paragraph({ children: [new TextRun({ text: "  渠道：微信搜索、脉脉搜索" })] }),
      new Paragraph({ children: [new TextRun({ text: "  目标：找到5位行政/HR/采购负责人的微信" })] }),

      new Paragraph({ children: [new TextRun({ text: " ", size: 16 })] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: "Day 3 后天" })] }),
      new Paragraph({ children: [new TextRun({ text: "□ 发送首批联系话术（每天3-5家）" })] }),
      new Paragraph({ children: [new TextRun({ text: "□ 发送话术给这5家企业" })] }),
      new Paragraph({ children: [new TextRun({ text: "□ 记录反馈：谁回复了、说了什么" })] }),

      new Paragraph({ children: [new TextRun({ text: " ", size: 16 })] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: "Day 4" })] }),
      new Paragraph({ children: [new TextRun({ text: "□ 搜索第6-10家企业的联系人" })] }),
      new Paragraph({ children: [new TextRun({ text: "□ 继续发送话术" })] }),
      new Paragraph({ children: [new TextRun({ text: "□ 跟进Day 1的回复" })] }),

      new Paragraph({ children: [new TextRun({ text: " ", size: 16 })] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: "Day 5" })] }),
      new Paragraph({ children: [new TextRun({ text: "□ 跟进之前的客户" })] }),
      new Paragraph({ children: [new TextRun({ text: "□ 发送第2批话术" })] }),
      new Paragraph({ children: [new TextRun({ text: "□ 统计本周成果" })] }),

      new Paragraph({ children: [new TextRun({ text: " ", size: 16 })] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: "Day 6-7" })] }),
      new Paragraph({ children: [new TextRun({ text: "□ 复盘本周数据", bold: true })] }),
      new Paragraph({ children: [new TextRun({ text: "  - 发出多少消息？" })] }),
      new Paragraph({ children: [new TextRun({ text: "  - 有多少回复？" })] }),
      new Paragraph({ children: [new TextRun({ text: "  - 有多少有意向？" })] }),
      new Paragraph({ children: [new TextRun({ text: "□ 优化话术" })] }),

      new Paragraph({ children: [new TextRun({ text: " ", size: 22 })] }),
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: "成功指标（第一个月）", bold: true })] }),

      new Table({
        columnWidths: [3000, 3000],
        rows: [
          new TableRow({
            tableHeader: true,
            children: [
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA }, shading: { fill: "4472C4", type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "指标", bold: true, color: "FFFFFF" })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA }, shading: { fill: "4472C4", type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "目标", bold: true, color: "FFFFFF" })] })] })
            ]
          }),
          new TableRow({ children: [new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("联系方式获取")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("50家企业")] })] })] }),
          new TableRow({ children: [new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("发送消息数")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("150条")] })] })] }),
          new TableRow({ children: [new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("意向客户")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("10家")] })] })] }),
          new TableRow({ children: [new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("成交客户")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("2-3家")] })] })] })
        ]
      }),

      new Paragraph({ children: [new TextRun({ text: " ", size: 22 })] }),
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: "你需要配合的事", bold: true })] }),

      new Table({
        columnWidths: [3000, 3000],
        rows: [
          new TableRow({
            tableHeader: true,
            children: [
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA }, shading: { fill: "70AD47", type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "需要你做的", bold: true, color: "FFFFFF" })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA }, shading: { fill: "70AD47", type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "我能帮你的", bold: true, color: "FFFFFF" })] })] })
            ]
          }),
          new TableRow({ children: [new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("注册脉脉/LinkedIn账号")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("提供操作指引")] })] })] }),
          new TableRow({ children: [new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("每天花1-2小时搜索+联系")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("帮你优化话术")] })] })] }),
          new TableRow({ children: [new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("通过我的微信好友申请")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("实时帮你修改话术")] })] })] }),
          new TableRow({ children: [new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("记录客户反馈")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("帮你分析问题")] })] })] })
        ]
      }),

      new Paragraph({ children: [new TextRun({ text: " ", size: 22 })] }),
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: "你的下一步动作", bold: true })] }),
      new Paragraph({ children: [new TextRun({ text: "今天请完成：", bold: true })] }),
      new Paragraph({ children: [new TextRun({ text: "1. 加我微信（微信号：w13051688850，我帮你优化自我介绍）" })] }),
      new Paragraph({ children: [new TextRun({ text: "2. 下载目标客户名单" })] }),
      new Paragraph({ children: [new TextRun({ text: "3. 注册脉脉账号" })] }),

      new Paragraph({ children: [new TextRun({ text: " ", size: 22 })] }),
      new Paragraph({ children: [new TextRun({ text: "现在你可以直接打开这3个Word文档开始使用了！", bold: true, size: 24 })] })
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("C:/Users/86130/lobsterai/project/执行计划_跨境电商获客.docx", buffer);
  console.log("执行计划文档创建成功！");
});
