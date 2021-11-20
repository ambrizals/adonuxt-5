import { BaseCommand } from '@adonisjs/core/build/standalone'
import execa from 'execa'

export default class BuildAll extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = 'build:all'

  /**
   * Command description is displayed in the "help" output
   */
  public static description = 'Build adonis module and nuxt module project'

  public static settings = {
    /**
     * Set the following value to true, if you want to load the application
     * before running the command
     */
    loadApp: false,

    /**
     * Set the following value to true, if you want this command to keep running until
     * you manually decide to exit the process
     */
    stayAlive: true,
  }

  public async run() {
    const adonisBuild = await execa('npm', ['run', 'build'], {
      stdio: 'inherit',
    })

    if (adonisBuild.exitCode === 0) {
      this.logger.success('Adonis Build Successfull')
      const nuxtBuild = await execa('npm', ['run', 'build:nuxt'], {
        stdio: 'inherit',
      })
      if (nuxtBuild.exitCode === 0) {
        this.logger.success('Nuxt Build Successfull')
        this.logger.info('Linking nuxt build to adonis build directories')
        await execa('mkdir', ['build/public'])
        await execa('ln', ['-s', '../.nuxt/dist/client/', 'build/public/_nuxt'])
        this.logger.success('Successfull to linked nuxt build client to adonis build')
      } else {
        this.logger.error(`Nuxt Build Failed ${nuxtBuild.exitCode}`)
      }
    } else {
      this.logger.error(`Adonis Build Failed Status Code ${adonisBuild.exitCode}`)
    }
  }
}
