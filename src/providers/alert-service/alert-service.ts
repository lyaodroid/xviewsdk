import { AlertController, Alert, ToastController, LoadingController } from 'ionic-angular';
import { Injectable } from '@angular/core';

interface AlertOptions {
    title?: string;
    message: string;
    fn?: Function;
}
/**
 * 弹出框方法
 */
@Injectable()
export class AlertServiceProvider {

    constructor(
        public loadingCtrl: LoadingController,
        private alertCtrl: AlertController,
        private toastCtrl: ToastController) {
    }

    /**
     * 打开弹出框
     */
    alert(tip: string): void;

    alert(tip: AlertOptions): void;

    alert(tip: any): void {
        if (typeof tip == 'string') {
            tip = { message: tip };
        }

        let alert: Alert = this.alertCtrl.create({
            title: tip.title || '提示',
            message: tip.message,
            buttons: [{
                text: '确定',
                handler: () => {
                    if (tip.fn) {
                        return tip.fn();
                    }
                    return true;
                }
            }]
        });
        alert.present();
    }

    /**
     * 打开确认取消弹出框
     */
    confirm(message: any, okFun: any, cancelFun?: any) {
        let alert = this.alertCtrl.create({
            title: '提示信息',
            message: message || "确认操作吗?",
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    handler: () => {
                        cancelFun && cancelFun();
                    }
                },
                {
                    text: '确认',
                    handler: () => {
                        okFun && okFun();
                    }
                }
            ]
        });
        alert.present();
    }

    /**
     * 显示Toast提示
     * @param position bottom,top,middle
     */
    showToast(message: string = '提示信息', position: string = 'bottom', showCloseButton: boolean = false, dismissHandler: (data: any, role: string) => void = this.dismissHandler) {
        const toast = this.toastCtrl.create({
            message: message,
            position: position,
            duration: 3000,
            showCloseButton: showCloseButton,
            closeButtonText: 'Ok'
        });
        toast.onDidDismiss(dismissHandler);
        toast.present();
    }

    /**
     * 吐司水印提示框
     * @param message 
     */
    tipToast(message: string = '提示信息', duration: number = 2000) {
        const toast = this.toastCtrl.create({
            message: message,
            position: 'middle',
            duration: duration,
            cssClass: 'toast-tip'
        });
        toast.onDidDismiss(this.dismissHandler);
        toast.present();
    }

    /**
     * 显示loading小提示
     * @param message 
     * @param duration 
     */
    tipLoading(message: string = '提示信息', duration: number = 2000) {
        let loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: message,
            duration: duration,
            cssClass: 'loading-tip'
        });
        loading.present();
    }

    /**
     * 显示loading动画
     * @param message 
     * @param duration 
     * @param spinner ios ios-small bubbles	circles	crescent dots
     */
    showLoading(message: string = '玩命加载中...', duration: number = 2000, spinner: string = 'crescent') {
        let loading = this.loadingCtrl.create({
            spinner: spinner,
            content: message,
            duration: duration,
            cssClass: 'loading-tip'
        });
        loading.present();
    }

    private dismissHandler() {
    }

}