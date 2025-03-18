// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Frontegg.Outputs
{

    [OutputType]
    public sealed class WorkspaceBulkTenantsInvitesEmail
    {
        /// <summary>
        /// The address to use in the "From" header of the email.
        /// </summary>
        public readonly string FromAddress;
        /// <summary>
        /// The name to use in the "From" header of the email.
        /// </summary>
        public readonly string FromName;
        /// <summary>
        /// The HTML template to use in the email.
        /// </summary>
        public readonly string HtmlTemplate;
        /// <summary>
        /// The redirect URL to use, if applicable.
        /// 
        ///     Access this value as "\{\{redirectURL\}\}" in the template.
        /// </summary>
        public readonly string? RedirectUrl;
        /// <summary>
        /// The subject of the email.
        /// </summary>
        public readonly string Subject;
        /// <summary>
        /// The success redirect URL to use, if applicable.
        /// </summary>
        public readonly string? SuccessRedirectUrl;

        [OutputConstructor]
        private WorkspaceBulkTenantsInvitesEmail(
            string fromAddress,

            string fromName,

            string htmlTemplate,

            string? redirectUrl,

            string subject,

            string? successRedirectUrl)
        {
            FromAddress = fromAddress;
            FromName = fromName;
            HtmlTemplate = htmlTemplate;
            RedirectUrl = redirectUrl;
            Subject = subject;
            SuccessRedirectUrl = successRedirectUrl;
        }
    }
}
