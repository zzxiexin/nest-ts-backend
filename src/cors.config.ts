import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class CorsMiddleware implements NestMiddleware {
  use(req: any, res: Response, next: () => void) {
    // 设置允许跨域的域名和请求头
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    ); // 添加 Authorization

    if (req.method === 'OPTIONS') {
      // 如果是预检请求，直接返回成功状态
      res.status(200).end();
    } else {
      // 否则继续处理请求
      next();
    }
  }
}
