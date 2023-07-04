import { Injectable } from '@nestjs/common';
const reader = require('xlsx')

@Injectable()
export class AppService {
  async getHello() {
    return await this.readExcel()

  }

  async readExcel() {
    const file = reader.readFile('src/coupon.xlsx')
    let data = []

    const sheets = file.SheetNames

    for (let i = 0; i < sheets.length; i++) {
      const temp = reader.utils.sheet_to_json(
        file.Sheets[file.SheetNames[i]])
      temp.forEach((res) => {
        data.push(res)
      })
    }
    let result = []
    data.forEach((item) => {
      result.push(item['Random Coupon Code'])
    })
    return result
  }
}
