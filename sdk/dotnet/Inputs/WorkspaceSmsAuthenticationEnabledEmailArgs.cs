// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Frontegg.Inputs
{

    public sealed class WorkspaceSmsAuthenticationEnabledEmailArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// The address to use in the "From" header of the email.
        /// </summary>
        [Input("fromAddress", required: true)]
        public Input<string> FromAddress { get; set; } = null!;

        /// <summary>
        /// The name to use in the "From" header of the email.
        /// </summary>
        [Input("fromName", required: true)]
        public Input<string> FromName { get; set; } = null!;

        /// <summary>
        /// The HTML template to use in the email.
        /// </summary>
        [Input("htmlTemplate", required: true)]
        public Input<string> HtmlTemplate { get; set; } = null!;

        /// <summary>
        /// The redirect URL to use, if applicable.
        /// 
        ///     Access this value as "\{\{redirectURL\}\}" in the template.
        /// </summary>
        [Input("redirectUrl")]
        public Input<string>? RedirectUrl { get; set; }

        /// <summary>
        /// The subject of the email.
        /// </summary>
        [Input("subject", required: true)]
        public Input<string> Subject { get; set; } = null!;

        /// <summary>
        /// The success redirect URL to use, if applicable.
        /// </summary>
        [Input("successRedirectUrl")]
        public Input<string>? SuccessRedirectUrl { get; set; }

        public WorkspaceSmsAuthenticationEnabledEmailArgs()
        {
        }
        public static new WorkspaceSmsAuthenticationEnabledEmailArgs Empty => new WorkspaceSmsAuthenticationEnabledEmailArgs();
    }
}
