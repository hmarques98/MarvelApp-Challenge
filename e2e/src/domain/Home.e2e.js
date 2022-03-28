describe('Home flow', () => {
  it('should tap to know more about the App', async () => {
    await device.reloadReactNative()

    await expect(element(by.text('More about the App'))).toBeVisible()
    await element(by.text(translate.t('home.aboutTheApp'))).tap()
  })
})
