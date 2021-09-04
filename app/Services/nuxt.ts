import env from '@ioc:Adonis/Core/Env'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Nuxt } from 'nuxt'
import nuxtConfig from 'Config/nuxt'

class NuxtService {
  private nuxt: any

  // /**
  //  * Starts the build process
  //  *
  //  * @method boot
  //  *
  //  * @return {void}
  //  */
  // public build() {
  //   // const isDev: boolean = env.get('NODE_ENV') !== 'production'
  //   const config = { ...nuxtConfig, dev: false }
  //   this.nuxt = new Nuxt(config)
  //   return this
  // }

  public async render({ request, response }: HttpContextContract) {
    // console.log(request.parsedUrl.path)
    const isDev: boolean = env.get('NODE_ENV') !== 'production'
    const config = { ...nuxtConfig, dev: isDev }
    this.nuxt = new Nuxt(config)
    return await this.nuxt.renderRoute(request.parsedUrl.path)
  }
}

export default new NuxtService()
