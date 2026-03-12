const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, HeadingLevel, AlignmentType, BorderStyle, WidthType, ShadingType, VerticalAlign } = require('docx');
const fs = require('fs');

const tableBorder = { style: BorderStyle.SINGLE, size: 8, color: "CCCCCC" };
const cellBorders = { top: tableBorder, bottom: tableBorder, left: tableBorder, right: tableBorder };

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, color: "000000" },
        paragraph: { spacing: { before: 240, after: 120 } } }
    ]
  },
  sections: [{
    properties: { page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
    children: [
      new Paragraph({ heading: HeadingLevel.TITLE, children: [new TextRun({ text: "跨境电商企业目标客户名单", bold: true, size: 44 })] }),
      new Paragraph({ children: [new TextRun({ text: " ", size: 22 })] }),

      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: "第一批：优先开发（深圳企业为主）", bold: true })] }),
      new Table({
        columnWidths: [1000, 4000, 2000, 3000],
        rows: [
          new TableRow({
            tableHeader: true,
            children: [
              new TableCell({ borders: cellBorders, width: { size: 1000, type: WidthType.DXA }, shading: { fill: "4472C4", type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "序号", bold: true, color: "FFFFFF" })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 4000, type: WidthType.DXA }, shading: { fill: "4472C4", type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "公司名称", bold: true, color: "FFFFFF" })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, shading: { fill: "4472C4", type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "城市", bold: true, color: "FFFFFF" })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA }, shading: { fill: "4472C4", type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "行业细分", bold: true, color: "FFFFFF" })] })] })
            ]
          }),
          new TableRow({ children: [new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("1")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("安克创新")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("深圳")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("电子产品跨境电商")] })] })] }),
          new TableRow({ children: [new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("2")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("泽宝科技")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("深圳")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("3C电子产品跨境")] })] })] }),
          new TableRow({ children: [new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("3")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("有棵树")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("深圳")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("跨境电商综合服务")] })] })] }),
          new TableRow({ children: [new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("4")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("赛维时代")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("深圳")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("服装、家居跨境电商")] })] })] }),
          new TableRow({ children: [new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("5")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("子不语")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("杭州")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("服装跨境电商")] })] })] }),
          new TableRow({ children: [new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("6")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("三态股份")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("深圳")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("跨境电商物流")] })] })] }),
          new TableRow({ children: [new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("7")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("价之链")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("深圳")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("跨境电商运营服务")] })] })] }),
          new TableRow({ children: [new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("8")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("易佰网络")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("深圳")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("跨境电商综合服务")] })] })] }),
          new TableRow({ children: [new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("9")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("通拓科技")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("深圳")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("跨境电商出口")] })] })] }),
          new TableRow({ children: [new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("10")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("海翼股份")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("深圳")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("智能硬件跨境销售")] })] })] })
        ]
      }),

      new Paragraph({ children: [new TextRun({ text: " ", size: 22 })] }),
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: "第二批：重点开发（杭州/上海/北京）", bold: true })] }),
      new Table({
        columnWidths: [1000, 4000, 2000, 3000],
        rows: [
          new TableRow({
            tableHeader: true,
            children: [
              new TableCell({ borders: cellBorders, width: { size: 1000, type: WidthType.DXA }, shading: { fill: "70AD47", type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "序号", bold: true, color: "FFFFFF" })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 4000, type: WidthType.DXA }, shading: { fill: "70AD47", type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "公司名称", bold: true, color: "FFFFFF" })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, shading: { fill: "70AD47", type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "城市", bold: true, color: "FFFFFF" })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA }, shading: { fill: "70AD47", type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "行业细分", bold: true, color: "FFFFFF" })] })] })
            ]
          }),
          new TableRow({ children: [new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("11")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("阿里巴巴国际站")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("杭州")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("B2B跨境电商平台")] })] })] }),
          new TableRow({ children: [new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("12")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("菜鸟网络")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("杭州")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("跨境物流、仓储")] })] })] }),
          new TableRow({ children: [new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("13")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("京东物流")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("北京")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("跨境物流综合服务")] })] })] }),
          new TableRow({ children: [new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("14")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("京东国际")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("北京")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("跨境电商平台")] })] })] }),
          new TableRow({ children: [new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("15")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("小米科技")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("北京")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("智能硬件出口")] })] })] }),
          new TableRow({ children: [new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("16")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("联想集团")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("北京")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("电脑、电子产品出口")] })] })] }),
          new TableRow({ children: [new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("17")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("百世快递")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("杭州")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("跨境物流")] })] })] }),
          new TableRow({ children: [new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("18")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("浙江物产中大集团")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("杭州")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("大宗商品进出口")] })] })] }),
          new TableRow({ children: [new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("19")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("全球速卖通")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("杭州")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("B2B跨境电商平台")] })] })] }),
          new TableRow({ children: [new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("20")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("天猫国际")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("杭州")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("跨境电商平台")] })] })] })
        ]
      }),

      new Paragraph({ children: [new TextRun({ text: " ", size: 22 })] }),
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: "第三批：备选开发", bold: true })] }),
      new Table({
        columnWidths: [1000, 4000, 2000, 3000],
        rows: [
          new TableRow({
            tableHeader: true,
            children: [
              new TableCell({ borders: cellBorders, width: { size: 1000, type: WidthType.DXA }, shading: { fill: "FFC000", type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "序号", bold: true, color: "000000" })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 4000, type: WidthType.DXA }, shading: { fill: "FFC000", type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "公司名称", bold: true, color: "000000" })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, shading: { fill: "FFC000", type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "城市", bold: true, color: "000000" })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA }, shading: { fill: "FFC000", type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "行业细分", bold: true, color: "000000" })] })] })
            ]
          }),
          new TableRow({ children: [new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("21")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("顺丰速运")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("深圳")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("国际快递、跨境物流")] })] })] }),
          new TableRow({ children: [new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("22")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("DHL中国")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("上海")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("国际快递")] })] })] }),
          new TableRow({ children: [new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("23")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("FedEx中国")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("上海")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("国际快递")] })] })] }),
          new TableRow({ children: [new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("24")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("比亚迪股份有限公司")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("深圳")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("新能源汽车、电池出口")] })] })] }),
          new TableRow({ children: [new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("25")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("大疆创新")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("深圳")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("无人机产品出口")] })] })] }),
          new TableRow({ children: [new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("26")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("富士康科技集团")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("深圳")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("电子产品制造出口")] })] })] }),
          new TableRow({ children: [new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("27")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("中兴通讯")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("深圳")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("通信设备出口")] })] })] }),
          new TableRow({ children: [new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("28")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("华为技术有限公司")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("深圳")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("通信设备出口")] })] })] }),
          new TableRow({ children: [new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("29")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("美的集团")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("佛山")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("家电产品出口")] })] })] }),
          new TableRow({ children: [new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("30")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("格力电器")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("珠海")] })] }), new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun("空调等家电出口")] })] })] })
        ]
      }),

      new Paragraph({ children: [new TextRun({ text: " ", size: 22 })] }),
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: "开发优先级建议", bold: true })] }),
      new Paragraph({ children: [new TextRun({ text: "第1周目标：先搞定深圳的跨境电商企业（1-10号企业）" })] }),
      new Paragraph({ children: [new TextRun({ text: " ", size: 16 })] }),
      new Paragraph({ children: [new TextRun({ text: "优先联系岗位：", bold: true })] }),
      new Paragraph({ children: [new TextRun({ text: "• 行政部经理 / 行政总监" })] }),
      new Paragraph({ children: [new TextRun({ text: "• HR总监 / HR经理" })] }),
      new Paragraph({ children: [new TextRun({ text: "• 采购经理 / 采购总监" })] }),
      new Paragraph({ children: [new TextRun({ text: "• 差旅管理员" })] }),
      new Paragraph({ children: [new TextRun({ text: "• 老板助理 / 总经办" })] })
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("C:/Users/86130/lobsterai/project/目标客户名单_跨境电商.docx", buffer);
  console.log("文档创建成功！");
});
